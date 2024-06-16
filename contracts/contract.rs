extern crate soroban_sdk;

use soroban_sdk::{
    context::{Env, SelfHost},
    given,
    principal::{Principal, PrincipalString},
    storage::{Cell, Map},
    syscon::{Call, SystemContract},
};

#[derive(Debug, Serialize, Deserialize)]
pub struct CrypstantPay {
    // State variables
    seller_wallets: Map<PrincipalString, PrincipalString>, // Maps seller ID to preferred token address
    anon_aadhar_verifier: Option<PrincipalString>,     // Stores Anon Aadhar verification contract address (optional)
    refund_window: u64,                                     // Time window (in seconds) for claiming refunds
    sponsored_offers: Map<PrincipalString, SponsoredOffer>, // Stores sponsored offer details for sellers
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SponsoredOffer {
    token: PrincipalString,  // Token offered in the sponsored display
    commission_rate: u64,    // Percentage commission earned by seller
    offer_details: String,  // Details about the sponsored offer
}

#[derive(Debug, Serialize, Deserialize)]
pub enum CrypstantPayError {
    SellerNotFound,
    InvalidToken,
    InsufficientBalance,
    TransferFailed,
    RefundWindowClosed,
    InvalidAnonAadharData,
    VerificationFailed,
    OfferNotFound,
}

impl CrypstantPay {
    pub fn new(refund_window: u64) -> Self {
        CrypstantPay {
            seller_wallets: Map::new(),
            anon_aadhar_verifier: None,
            refund_window,
            sponsored_offers: Map::new(),
        }
    }

    /// Registers a new seller, stores their preferred token address, and optionally verifies Aadhar details using the Anon Aadhar verifier contract (if provided).
    pub fn register_seller(
        &mut self,
        seller_id: PrincipalString,
        preferred_token: PrincipalString,
        aadhar_data: Option<String>,
    ) -> Result<(), CrypstantPayError> {
        if self.seller_wallets.contains_key(&seller_id) {
            return Err(CrypstantPayError::SellerNotFound);
        }

        if !soroban_sdk::is_valid_principal(&preferred_token) {
            return Err(CrypstantPayError::InvalidToken);
        }

        let verifier = self.anon_aadhar_verifier.clone();
        if let Some(aadhar_data) = aadhar_data {
            if let Some(verifier) = verifier {
                let call = Call::new(verifier, "verify", (aadhar_data,));
                let result = Env::call(call)?;
                if !result.as_bool().unwrap_or(false) {
                    return Err(CrypstantPayError::VerificationFailed);
                }
            } else {
                return Err(CrypstantPayError::InvalidAnonAadharData);
            }
        }

        self.seller_wallets.insert(seller_id.clone(), preferred_token);
        Ok(())
    }

    /// Processes a payment from a buyer to a seller. This function performs the following actions:
    /// 1. Verifies buyer's balance for the specified token.
    /// 2. Transfers funds from buyer to seller in the seller's preferred token (using Soroban's cross-chain functionalities).
    /// 3. Optionally, triggers sponsored offer logic if enabled for the seller.
    pub fn pay(
        &mut self,
        buyer_id: PrincipalString,
        seller_id: PrincipalString,
        amount: u64,
        token: PrincipalString,
    ) -> Result<(), CrypstantPayError> {
        let seller_wallet = self.seller_wallets.get(&seller_id).ok_or(CrypstantPayError::SellerNotFound)?;

        // Check buyer's balance for the payment token
        let buyer_balance = SelfHost::balance_of(&token)?;
        if buyer_balance < amount {
            return Err(CrypstantPayError::InsufficientBalance);
        }

        // Transfer funds from buyer to seller in seller's preferred token
        let transfer_result = SelfHost

