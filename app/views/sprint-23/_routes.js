const express = require('express');
const router = express.Router();
const version = 'sprint-23'

// Add your routes here - above the module.exports line

// STEP 8 - CLOSE PLEDGE
router.post('/MVS/sender/STEP-8/delete_pledge_action', function (req, res) {
     const delete_pledge = req.session.data.delete_pledge
     if (delete_pledge === 'Yes') {
          res.redirect('/' + version + '/MVS/sender/STEP-8/8A-pledge-details')
     } else {
          res.redirect('/' + version + '/MVS/sender/STEP-8/8A-pledge-details')
     }
})

// 910106
router.post('/MVS/sender/STEP-8/pledge_action_910106', function (req, res) {
     const pledge_actions_910106 = req.session.data.pledge_actions_910106
     res.redirect('/' + version + '/MVS/sender/STEP-8/11B-action')
})

router.post('/MVS/sender/STEP-8/confirm_910106', function (req, res) {
     const confirm_910106 = req.session.data.confirm_910106
     res.redirect('/' + version + '/MVS/sender/STEP-8/8B-pledge-details')
})

// 910105
router.post('/MVS/sender/STEP-8/pledge_action_910105', function (req, res) {
     const pledge_actions_910105 = req.session.data.pledge_actions_910105
     res.redirect('/' + version + '/MVS/sender/STEP-8/11C-action')
})

router.post('/MVS/sender/STEP-8/confirm_910105', function (req, res) {
     const confirm_910105 = req.session.data.confirm_910105
     res.redirect('/' + version + '/MVS/sender/STEP-8/13A-carry-over')
})

router.post('/MVS/sender/STEP-8/confirm_carry_over', function (req, res) {
     const confirm_carry_over_910105 = req.session.data.confirm_carry_over_910105
     res.redirect('/' + version + '/MVS/sender/STEP-8/create-pledge/5-new-pledge-details')
})

// 910104
router.post('/MVS/sender/STEP-8/pledge_action_910104', function (req, res) {
     const pledge_actions_910104 = req.session.data.pledge_actions_910104
     res.redirect('/' + version + '/MVS/sender/STEP-8/12D-action-answer')
})

router.post('/MVS/sender/STEP-8/confirm_910104', function (req, res) {
     const confirm_910104 = req.session.data.confirm_910104
     res.redirect('/' + version + '/MVS/sender/STEP-8/13D-confirmation')
})

// 910107
router.post('/MVS/sender/STEP-1/delete_pledge_action', function (req, res) {
     const delete_pledge = req.session.data.delete_pledge
     if (delete_pledge === 'Yes') {
          res.redirect('/' + version + '/MVS/sender/STEP-1/8-my-pledges')
     } else {
          res.redirect('/' + version + '/MVS/sender/STEP-1/11-pledge-details')
     }
})

//  STEP 7 - REJECT APPLICANTION
router.post('/MVS/sender/STEP-7/approve_application_action', function (req, res) {
  const approve_application_action = req.session.data.approve_application_action
  res.redirect('/' + version + '/MVS/sender/STEP-7/5A-pledge-details')
})

router.post('/MVS/sender/STEP-3/accept_application', function (req, res) {
     const accept_application = req.session.data.accept_application
     if (accept_application === 'Accept') {
          res.redirect('/' + version + '/MVS/sender/STEP-3/7A-confirmation')
     } else if (accept_application === 'Reject') {
          res.redirect('/' + version + '/MVS/sender/STEP-3/5-pledge-details')
     }
})

// DECLINE FUNDING
router.post('/MVS/receiver/STEP-9-10/decline_application_action', function (req, res) {
  const accept_funding = req.session.data.accept_funding
  res.redirect('/' + version + '/MVS/receiver/STEP-9-10/4-my-applications')
})

// ACCEPT FUNDING
router.post('/MVS/receiver/STEP-4/accept_funding_form_route', function (req, res) {
  const accept_funding = req.session.data.accept_funding
  if (accept_funding === 'Accept') {
    res.redirect('/' + version + '/MVS/receiver/STEP-4/6A-confirm')
  } else if (accept_funding === 'Decline') {
    res.redirect('/' + version + '/MVS/receiver/STEP-4/7-decline')
  }
})

// WITHDRAW APPLICATION
router.post('/MVS/receiver/STEP-4/withdraw_application', function (req, res) {
  const withdraw_application = req.session.data.withdraw_application
  if (withdraw_application === 'Withdraw') {
    res.redirect('/' + version + '/MVS/receiver/STEP-4/8-withdraw')
  } else if (withdraw_application === 'Keep') {
    res.redirect('/' + version + '/MVS/receiver/STEP-4/4-my-applications')
  }
})

// CANCEL APPLICATION
router.post('/MVS/receiver/STEP-9-10/cancel_application_action', function (req, res) {
     const cancel_application = req.session.data.cancel_application
     if (cancel_application === 'Yes') {
          res.redirect('/' + version + '/MVS/receiver/STEP-9-10/4-my-applications')
     } else {
          res.redirect('/' + version + '/MVS/receiver/STEP-9-10/5B-pledge-details')
     }
})

// CONNECT TO EMPLOYER
router.post('/MVS/sender/STEP-11/connect_to_employer', function (req, res) {
  const connect_to_employer = req.session.data.connect_to_employer
  if (connect_to_employer === 'Yes') {
    res.redirect('/' + version + '/MVS/sender/STEP-11/6-about-the-transfer')
  } else {
    res.redirect('/' + version + '/MVS/sender/STEP-11/4-transfer-to-business')
  }
})

router.post('/MVS/sender/STEP-11/about_the_transfer', function (req, res) {
  const about_the_transfer = req.session.data.about_the_transfer
  if (about_the_transfer === 'Yes') {
    res.redirect('/' + version + '/MVS/sender/STEP-11/7A-about-the-transfer')
  } else {
    res.redirect('/' + version + '/MVS/sender/STEP-11/8A-amount')
  }
})

// APPLY FOR TRANSFER
router.post('/MVS/receiver/STEP-2/apply_for_transfer', function (req, res) {
     const apply_for_transfer = req.session.data.apply_for_transfer
     if (apply_for_transfer === 'Yes') {
          res.redirect('/' + version + '/MVS/receiver/STEP-2/7-new-transfer-application')
     } else {
          res.redirect('/' + version + '/MVS/receiver/STEP-2/5-search-pledge')
     }
})

// STEP 5.1 - APPROVALS - RECEIVER
// 1
router.post('/MVS/receiver/STEP-5-1/choose_organisation', function (req, res) {
     const choose_organisation = req.session.data.choose_organisation
     res.redirect('/' + version + '/MVS/receiver/STEP-5-1/5-add-provider-details')
})
// 2
router.post('/MVS/receiver/STEP-5-1/add_provider_details', function (req, res) {
     const add_provider_details = req.session.data.add_provider_details
     res.redirect('/' + version + '/MVS/receiver/STEP-5-1/6-confirm-training-provider')
})
// 3
router.post('/MVS/receiver/STEP-5-1/confirm_training_provider', function (req, res) {
     const confirm_training_provider = req.session.data.confirm_training_provider
     if (confirm_training_provider === 'Yes') {
          res.redirect('/' + version + '/MVS/receiver/STEP-5-1/7-start-adding-apprentices')
     } else {
          res.redirect('/' + version + '/MVS/receiver/STEP-5-1/5-add-provider-details')
     }
})
// 4
router.post('/MVS/receiver/STEP-5-1/start_adding_apprentices', function (req, res) {
     const start_adding_apprentices = req.session.data.start_adding_apprentices
     if (start_adding_apprentices === 'I will add apprentices') {
          res.redirect('/' + version + '/MVS/receiver/STEP-5-1/8-apprentice-details')
     } else {
          res.redirect('/' + version + '/MVS/receiver/STEP-5-1/7-start-adding-apprentices')
     }
})
// 5
router.post('/MVS/receiver/STEP-5-1/add_apprentice_details', function (req, res) {
     const add_apprentice_details = req.session.data.add_apprentice_details
     res.redirect('/' + version + '/MVS/receiver/STEP-5-1/9-approve-apprentice-details')
})

// 6
router.post('/MVS/receiver/STEP-5-1/approve_apprentice_details', function (req, res) {
     const approve_apprentice_details = req.session.data.approve_apprentice_details
     res.redirect('/' + version + '/MVS/receiver/STEP-5-1/10-confirmation')
})


// STEP 5.2 - APPROVALS - PROVIDER
// 1
router.post('/MVS/provider/STEP-5-2/send_apprentice_details', function (req, res) {
     const send_apprentice_details = req.session.data.send_apprentice_details
     if (send_apprentice_details === 'Yes') {
          res.redirect('/' + version + '/MVS/provider/STEP-5-2/7-confirmation')
     } else {
          res.redirect('/' + version + '/MVS/provider/STEP-5-2/3-apprentice-requests')
     }
})
router.post('/MVS/provider/STEP-5-2/edit_apprentice_details', function (req, res) {
     const edit_apprentice_details = req.session.data.edit_apprentice_details
     res.redirect('/' + version + '/MVS/provider/STEP-5-2/5-approve-details')
})


// STEP 5.3 - APPROVALS - SENDER
// 1
router.post('/MVS/sender/STEP-5-3/approvals_accept_reject', function (req, res) {
     const approvals_accept_reject = req.session.data.approvals_accept_reject
     if (approvals_accept_reject === 'Accept') {
          res.redirect('/' + version + '/MVS/sender/STEP-5-3/6-confirmation')
     } else {
          res.redirect('/' + version + '/MVS/sender/STEP-5-3/4-transfers')
     }
})
// 2
router.post('/MVS/sender/STEP-5-3/approvals_confirm', function (req, res) {
     const approvals_confirm = req.session.data.approvals_confirm
     if (approvals_confirm === 'Dashboard') {
          res.redirect('/' + version + '/MVS/sender/STEP-5-3/4-transfers')
     } else {
          res.redirect('/' + version + '/MVS/sender/STEP-5-3/2-my-account')
     }
})



module.exports = router
