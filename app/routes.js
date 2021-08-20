const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// DELETE PLEDGE
router.post('/sprint-15A/MVS/sender/STEP-7-8/delete_pledge_action', function (req, res) {
     const delete_pledge = req.session.data.delete_pledge
     if (delete_pledge === 'Yes') {
          res.redirect('/sprint-15A/MVS/sender/STEP-7-8/4-my-pledges')
     }
     else {
          res.redirect('/sprint-15A/MVS/sender/STEP-7-8/5B-pledge-details')
     }
})

// REJECT APPLICANTION
router.post('/sprint-15A/MVS/sender/STEP-7-8/approve_application_action', function (req, res) {
     const approve_application_action = req.session.data.approve_application_action
     res.redirect('/sprint-15A/MVS/sender/STEP-7-8/5A-pledge-details')
})

// DECLINE FUNDING
router.post('/sprint-15A/MVS/receiver/STEP-9-10/decline_application_action', function (req, res) {
     const accept_funding = req.session.data.accept_funding
     res.redirect('/sprint-15A/MVS/receiver/STEP-9-10/4-my-applications')
})

// CANCEL APPLICATION
router.post('/sprint-15A/MVS/receiver/STEP-9-10/cancel_application_action', function (req, res) {
     const cancel_application = req.session.data.cancel_application
     if (cancel_application === 'Yes') {
          res.redirect('/sprint-15A/MVS/receiver/STEP-9-10/4B-my-applications')
     }
     else {
          res.redirect('/sprint-15A/MVS/sender/STEP-7-8/5B-pledge-details')
     }

})
