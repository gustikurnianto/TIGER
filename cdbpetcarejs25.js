var offlineMsg = document.getElementById("offline-message");

        function _showOfflineMessage(){
            $('#klikduakali').remove();
            $('#loadingselesailogin').remove();
            window.getUsername = function() {
                return false;
            }
            window.onload = function() {
                return false;
            }
            document.getElementsByTagName("html")[0].setAttribute("offline",true);
            offlineMsg.setAttribute("aria-hidden","false");
            setTimeout(function(){
                $('#klikduakali').remove();
                $('#loadingselesailogin').remove();
                window.getUsername = function() {
                    return false;
                }
                window.onload = function() {
                    return false;
                }
                offlineMsg.focus();
            },400);
        }

        function _hideOfflineMessage(){
            document.getElementsByTagName("html")[0].setAttribute("offline",false);
            offlineMsg.setAttribute("aria-hidden","true");
            $('#online-message').show().delay(3000).fadeOut(300);
        }

        window.addEventListener("offline", _showOfflineMessage, false);

        window.addEventListener("online", _hideOfflineMessage, false);
