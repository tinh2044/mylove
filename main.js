 const audio = document.querySelector('#audio')
 setTimeout(function() { 
   
   audio.play()
  },200)
var img8 = document.getElementsByClassName("img8")
 var imgs = [
    'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/278353730_1429376147481481_1547412311328570709_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=eKYQaP126oIAX_iJ_zE&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-RqXXirk8NtTBIpssonWOTH1QnteO5fwl0PfR_MVR66g&oe=631D36A6',
    'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/275735701_1409346242817805_7925623913937242987_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_ohc=5JH6lTpfdc0AX-fHNRN&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT915hZbXRISwO1JxR9pQWcHLx3FbY9WY1E6vPxsDP3BPQ&oe=631CC951',
    'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/257869068_1338752946543802_6597387361875767628_n.jpg?stp=c0.165.1500.1500a_dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=3KeRzH2HLx0AX_F1kfH&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT963eIFXjgKu84IH6VYvKMwpswpP9cDmpVbkRAle3Bgjw&oe=631C9406',
    'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/260328224_1346532985765798_8501991482850598005_n.jpg?stp=c0.165.1499.1499a_dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Lbx5GSddbtoAX8FZh_-&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT8ngYKB6fWJ5S2sPlcSNLLDWb1j7wQr3yoxqGs0ukB94g&oe=631CE201',
    'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/256303998_1332886170463813_5755754510723097237_n.jpg?stp=c0.165.1500.1500a_dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=mJxJ7TdPWEYAX-MbxcK&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT9FcJLo6ayu0-plwIrySI8a5o_tHYT5g-5UMcETIhrRBA&oe=631BAE64',
    'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/248368189_1329032220849208_352926923075484580_n.jpg?stp=c0.78.304.304a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=jvIynOyy2twAX8O0gCW&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT-0NSnWW3Ke6rS3lGJ1xt87pqptqO_-2X-jdWSuwWO84A&oe=631C0EF4',
    'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/240178091_1281659218919842_4942173539648214131_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=3sfh2OBCimMAX9b60P7&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9yGdgfZsjhcy1xzR9FiUUvxJNgfBPU5HSekh8lVunAhA&oe=631BE26E',
    'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/236532428_1274314156321015_4204458142462483963_n.jpg?stp=c0.106.960.960a_dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=qHP368rvN9wAX8zUU--&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT-dBp2aASF7d20HnX2kgHnOu88sXMUV3bVjdnisi0Jdxw&oe=631BB692',
    'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/236565718_1271638819921882_3776207528302462253_n.jpg?stp=c0.165.1500.1500a_dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=p8mlypcJdrcAX8ewu7S&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT_sOTSal5f118-qNkF9OFx3-IBwh4WLlo7PWJzVSsoLWA&oe=631C4D61',
    'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/236798431_1274314142987683_601040792201245136_n.jpg?stp=c0.165.1500.1500a_dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=UhxJCVKWP0kAX8ZR0TP&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT970zE2KUOu99M_WTyO2bNSZ2NyNVZt2J32ZtQ9KdXyrA&oe=631B9E57',
    'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/241621242_1289254194827011_3538763249639763719_n.jpg?stp=c0.251.1286.1286a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=FqKHwP7dAGgAX94Jobo&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8XCQTVM4RWbx_mxcLqswVk_F1WAlwKll9NXlfvIpQuDg&oe=631C839B',
    'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/241621242_1289254194827011_3538763249639763719_n.jpg?stp=c0.251.1286.1286a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=FqKHwP7dAGgAX94Jobo&tn=oG-8MMc8sUhNhWuk&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8XCQTVM4RWbx_mxcLqswVk_F1WAlwKll9NXlfvIpQuDg&oe=631C839B',
    'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/243641940_1303522050066892_2733511933872085900_n.jpg?stp=c0.165.1500.1500a_dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=hJGBbCeuxDcAX_qcE3H&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT8OqaMfLG7oDZy_SW8c7mbWjirTM5RGGmtCMZCET8W_-Q&oe=631BF566',
    'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/154273108_1168912300194535_4333362598425110408_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s851x315&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=q3CkwCQ_yiMAX902ROV&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT8Hy9LSdkZF56WtPfpm78MWzW8Z5HNxhSLd6ojKUvMp_Q&oe=633EDC69',

 ]
const bodyEl = document.querySelector("body");
Array.from(img8).forEach(function(img) {    
    var i0 = Math.floor(Math.random() *imgs.length);
    img.style =`background: url(${imgs[i0]}) top center / cover no-repeat;`
    img.style.top = (Math.floor(Math.random() *1000)).toString() + 'px'
    img.style.right = (Math.floor(Math.random() *1000)).toString() + 'px'
    img.style.bottom = (Math.floor(Math.random() *1000)).toString() + 'px'
    img.style.left = (Math.floor(Math.random() *1000)).toString() + 'px'

})
var v = 0
// document.querySelector('source').setAttribute('src','./y2meta.com - Ánh mắt ta chạm nhau remix HOT TIK TOK - Anh Muốn Đưa Em Về Không (Đại Mèo remix ) Ngô Lan Hương (128 kbps).mp3')
setInterval( () => {
  const xPos = Math.floor(Math.random() *1000)+50;
  const yPos = Math.floor(Math.random() *1000)+70;
  const spanEl = document.createElement("span");
  if ( v < imgs.length) {
      spanEl.style = `background: url("${imgs[v]}") top center / cover no-repeat`;
      v = v+ 1
  } else {
      v = 0
  }
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 200;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
},20);
bodyEl.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos =event.offsetY;
    const spanEl = document.createElement("span");
    if ( v < imgs.length) {
          spanEl.style = `background: url("${imgs[v]}")`;
          v = v+ 1
      } else {
          v = 0
      }
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 200;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  },20);
setInterval(() => {
    Array.from(img8).forEach(function(img, index) {    
        var i0 = Math.floor(Math.random() *imgs.length);
            img.style =`background: url(${imgs[i0]}) top center / cover no-repeat;`
            img.style.top = (Math.floor(Math.random() *500)).toString() + 'px'
            img.style.right = (Math.floor(Math.random() *1000)).toString() + 'px'
            img.style.bottom = (Math.floor(Math.random() *500)).toString() + 'px'
            img.style.left = (Math.floor(Math.random() *1000)).toString() + 'px'

    })

},1000)

