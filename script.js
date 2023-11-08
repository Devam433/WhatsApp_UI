
let navigationBtns = document.querySelectorAll('.btn');

let chatbtn = document.getElementById('chatbtn');
let statusbtn = document.getElementById('statusbtn');
let callbtn = document.getElementById('callsbtn');

navigationBtns.forEach((element) => {

    element.addEventListener("click", () => {

        if (element.id === "statusbtn") {
            document.getElementById('contact').style.left = "-100%";
            document.getElementById("sS").style.left = "0";
            document.getElementById("callSection").style.left = "-100%";
            
        }
        else if (element.id === "chatbtn") {
            document.getElementById("contact").style.left = "0";
            document.getElementById("sS").style.left = "-100%";
            document.getElementById("callSection").style.left = "100%";

        }
        else if (element.id === "callsbtn") {
            document.getElementById("callSection").style.left = "0";
            document.getElementById("contact").style.left = "-100%";
            document.getElementById("sS").style.left = "-100%";

        }
    })
})

// Logic for targeting headRightContent
let headRightContentFearures = document.querySelectorAll(".headRightContent i");

headRightContentFearures.forEach((element) => {

    element.addEventListener('click', () => {

        if (element.id === "camera") {

            const player = document.getElementById('player');
            const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');
            const captureButton = document.getElementById('capture');
            const stopCamera = document.getElementById('stopCamera');

            const constraints = { //constraints object to check video constraint
                video: true,
            };

            captureButton.addEventListener('click', () => {
                context.drawImage(player, 0, 0, canvas.width, canvas.height);

                // Stop all video streams.
                // player.srcObject.getVideoTracks().forEach(track => track.stop());
            });

            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {

                //display player start
                player.style.display = "block";
                canvas.style.display = 'block';
                captureButton.style.display = 'block';
                stopCamera.style.display = 'block';
                //display player end

                // Attach the video stream to the video element and autoplay.
                player.srcObject = stream;
            });

            stopCamera.addEventListener('click', () => {

                if (player.srcObject) {
                    //hide player start
                    player.style.display = "none";
                    canvas.style.display = 'none';
                    captureButton.style.display = 'none';
                    stopCamera.style.display = 'none';
                    //hide player end

                    const tracks = player.srcObject.getVideoTracks();
                    tracks.forEach(track => track.stop());

                }
            })
        }
    })
})

let bar1 = document.getElementById('b1');
let bar2 = document.getElementById('b2');
let bar3 = document.getElementById('b3');
let navbar = document.getElementById('navBar');

bar2.style.display = "none";
bar3.style.display = "none";

window.onload = modifybar1();

function modifybar2() {
    navbar.style.justifyContent = 'space-evenly';
    statusbtn.style.color = "#ffffff";
    callbtn.style.color = "#d9d9d9";
    chatbtn.style.color = "#d9d9d9";
}
function modifybar1() {
    navbar.style.justifyContent = 'start';
    navbar.style.marginLeft = '40px';
    chatbtn.style.color = "#ffffff";
    statusbtn.style.color = "#d9d9d9";
    callbtn.style.color = "#d9d9d9";
}
function modifybar3() {
    navbar.style.justifyContent = 'end';
    navbar.style.marginRight = '40px';
    callbtn.style.color = "#ffffff";
    chatbtn.style.color = "#d9d9d9";
    statusbtn.style.color = "#d9d9d9";
}
