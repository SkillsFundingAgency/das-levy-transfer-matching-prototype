  module.exports = function (router) {

    var sprint = 'sprint-12'
     router.post('/' + sprint + '/MVS' + '/sender' + '/signin_validation', function (req, res) {
            var gi = req.session.data.gid;
            var pw = req.session.data.pword;
            var gid = "john.smith@email.com"; 
            var password = "12345678"; 
            if ((gi == gid) && (pw == password)) {
                req.session.data.signin_error = false;
                res.redirect('my_account');

            }
            else {
                req.session.data.signin_error = true;
                res.redirect('signin');
            }
      } 

      )

}