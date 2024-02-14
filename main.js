// Thay đổi nội dung búc thư ở đây
var letterContent = "Hôm nay ngày 14/2... Lời nhắn đầu tiên bn muốn gửi đến Hngoc... Chúc em có một ngày lễ tình nhân thật ý nghĩa. Mong rằng Hngoc luôn xinh đẹp và tự tin toả sáng theo một cách riêng. Chúc em luôn bình an mạnh khoẻ vui vẻ và hạnh phúc. Đừng cố gồng mình quá nhiều... Những năm tháng qua Hngoc đã vất vả ròiii. Hãy quên đi chuyện cũ trân trọng hiện tại. Và yêu lấy bản thân mình... Cảm ơn em vì đã luôn bên cạnh và thương anh<3_________Tdat"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})