const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// DELETE PLEDGE
router.post('/sprint-18/MVS/sender/STEP-7-8/delete_pledge_action', function (req, res) {
     const delete_pledge = req.session.data.delete_pledge
     if (delete_pledge === 'Yes') {
          res.redirect('/sprint-18/MVS/sender/STEP-7-8/4-my-pledges')
     } else {
          res.redirect('/sprint-18/MVS/sender/STEP-7-8/5B-pledge-details')
     }
})

router.post('/sprint-18/MVS/sender/STEP-1/delete_pledge_action', function (req, res) {
     const delete_pledge = req.session.data.delete_pledge
     if (delete_pledge === 'Yes') {
          res.redirect('/sprint-18/MVS/sender/STEP-1/8-my-pledges')
     } else {
          res.redirect('/sprint-18/MVS/sender/STEP-1/11-pledge-details')
     }
})

// REJECT APPLICANTION
router.post('/sprint-18/MVS/sender/STEP-7-8/approve_application_action', function (req, res) {
     const approve_application_action = req.session.data.approve_application_action
     res.redirect('/sprint-18/MVS/sender/STEP-7-8/5A-pledge-details')
})

router.post('/sprint-18/MVS/sender/STEP-3/accept_application', function (req, res) {
     const accept_application = req.session.data.accept_application
     if (accept_application === 'Accept') {
          res.redirect('/sprint-18/MVS/sender/STEP-3/7A-confirmation')
     } else if (accept_application === 'Reject') {
          res.redirect('/sprint-18/MVS/sender/STEP-3/5-pledge-details')
     }
})


// DECLINE FUNDING
router.post('/sprint-18/MVS/receiver/STEP-9-10/decline_application_action', function (req, res) {
     const accept_funding = req.session.data.accept_funding
     res.redirect('/sprint-18/MVS/receiver/STEP-9-10/4-my-applications')
})

// ACCEPT FUNDING
router.post('/sprint-18/MVS/receiver/STEP-4/accept_funding_form_route', function (req, res) {
     const accept_funding = req.session.data.accept_funding
     if (accept_funding === 'Accept') {
          res.redirect('/sprint-18/MVS/receiver/STEP-4/6A-confirm')
     } else if (accept_funding === 'Decline') {
          res.redirect('/sprint-18/MVS/receiver/STEP-4/7-decline')
     }
})

// WITHDRAW APPLICATION
router.post('/sprint-18/MVS/receiver/STEP-4/withdraw_application', function (req, res) {
     const withdraw_application = req.session.data.withdraw_application
     if (withdraw_application === 'Withdraw') {
          res.redirect('/sprint-18/MVS/receiver/STEP-4/8-withdraw')
     } else if (withdraw_application === 'Keep') {
          res.redirect('/sprint-18/MVS/receiver/STEP-4/4-my-applications')
     }
})





// CANCEL APPLICATION
router.post('/sprint-18/MVS/receiver/STEP-9-10/cancel_application_action', function (req, res) {
     const cancel_application = req.session.data.cancel_application
     if (cancel_application === 'Yes') {
          res.redirect('/sprint-18/MVS/receiver/STEP-9-10/4B-my-applications')
     } else {
          res.redirect('/sprint-18/MVS/sender/STEP-7-8/5B-pledge-details')
     }
})

// CONNECT TO EMPLOYER
router.post('/sprint-18/MVS/sender/STEP-11/connect_to_employer', function (req, res) {
     const connect_to_employer = req.session.data.connect_to_employer
     if (connect_to_employer === 'Yes') {
          res.redirect('/sprint-18/MVS/sender/STEP-11/6-about-the-transfer')
     } else {
          res.redirect('/sprint-18/MVS/sender/STEP-11/4-transfer-to-business')
     }
})

router.post('/sprint-18/MVS/sender/STEP-11/about_the_transfer', function (req, res) {
     const about_the_transfer = req.session.data.about_the_transfer
     if (about_the_transfer === 'Yes') {
          res.redirect('/sprint-18/MVS/sender/STEP-11/7A-about-the-transfer')
     } else {
          res.redirect('/sprint-18/MVS/sender/STEP-11/8A-amount')
     }
})

// APPLY FOR TRANSFER
router.post('/sprint-18/MVS/receiver/STEP-2/apply_for_transfer', function (req, res) {
     const apply_for_transfer = req.session.data.apply_for_transfer
     if (apply_for_transfer === 'Yes') {
          res.redirect('/sprint-18/MVS/receiver/STEP-2/7-new-transfer-application')
     } else {
          res.redirect('/sprint-18/MVS/receiver/STEP-2/1-signin')
     }
})

// STEP 5 - CHOOSE ORGANISATION
// 1
router.post('/sprint-18/MVS/receiver/STEP-5/choose_organisation', function (req, res) {
     const choose_organisation = req.session.data.choose_organisation
     res.redirect('/sprint-18/MVS/receiver/STEP-5/2-add-provider-details')
})
// 2
router.post('/sprint-18/MVS/receiver/STEP-5/add_provider_details', function (req, res) {
     const add_provider_details = req.session.data.add_provider_details
     res.redirect('/sprint-18/MVS/receiver/STEP-5/3-confirm-training-provider')
})
// 3
router.post('/sprint-18/MVS/receiver/STEP-5/confirm_training_provider', function (req, res) {
     const confirm_training_provider = req.session.data.confirm_training_provider
     if (confirm_training_provider === 'Yes') {
          res.redirect('/sprint-18/MVS/receiver/STEP-5/4-start-adding-apprentices')
     } else {
          res.redirect('/sprint-18/MVS/receiver/STEP-5/2-add-provider-details')
     }
})
// 4
router.post('/sprint-18/MVS/receiver/STEP-5/start_adding_apprentices', function (req, res) {
     const start_adding_apprentices = req.session.data.start_adding_apprentices
     if (start_adding_apprentices === 'I will add apprentices') {
          res.redirect('/sprint-18/MVS/receiver/STEP-5/5-apprentice-details')
     } else {
          res.redirect('/sprint-18/MVS/receiver/STEP-5/4-start-adding-apprentices')
     }
})
// 5
router.post('/sprint-18/MVS/receiver/STEP-5/add_apprentice_details', function (req, res) {
     const add_apprentice_details = req.session.data.add_apprentice_details
     res.redirect('/sprint-18/MVS/receiver/STEP-5/6-approve-apprentice-details')
})
