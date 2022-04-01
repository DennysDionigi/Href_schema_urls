//wrapper test
let buttonPath = document.querySelectorAll('.path-bottone');

if(buttonPath){
  
  /*each*/
buttonPath.forEach(bottone_svg => {

/* qui spline*/

function formatPoints(t,n){if(t=[...t],Array.isArray(t[0])||(t=t.map((({x:t,y:n})=>[t,n]))),n){let n=t[t.length-1],s=t[t.length-2],o=t[0],r=t[1];t.unshift(n),t.unshift(s),t.push(o),t.push(r)}return t.flat()}function spline(t=[],n=1,s=!1,o){let r=(t=formatPoints(t,s)).length,f=r-4,i=s?t[2]:t[0],e=s?t[3]:t[1];let u="M"+[i,e];o&&o("MOVE",[i,e]);let h=s?r-4:r-2;for(let r=s?2:0;r<h;r+=2){let s=r?t[r-2]:t[0],i=r?t[r-1]:t[1],e=t[r+0],h=t[r+1],l=t[r+2],a=t[r+3],c=e+(l-s)/6*n,p=h+(a-i)/6*n,g=l-((r!==f?t[r+4]:l)-e)/6*n,m=a-((r!==f?t[r+5]:a)-h)/6*n;u+="C"+[c,p,g,m,l,a],o&&o("CURVE",[c,p,g,m,l,a])}return u};


/*qui point path*/

function pointsInPath(t,n=10){let o=bottone_svg.getTotalLength(),e=o/n,g=[];for(let t=0;t<o;t+=e)g.push(bottone_svg.getPointAtLength(t));return g};

/*coordina le transformaz*/
  
function createCoordsTransformer(r){let e=r.createSVGPoint();return function(n){return e.x=n.clientX,e.y=n.clientY,e.matrixTransform(r.getScreenCTM().inverse())}};


/*init*/
function createLiquidPath(e,t){let a=pointsInPath(e,t.detail),s=a.map((({x:e,y:t})=>({x:e,y:t}))),x=a.map((({x:e,y:t})=>({x:e,y:t}))),y={x:0,y:0},i=createCoordsTransformer(bottone_svg.closest("svg")),o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),n=t.axis.includes("x")?o/2:0,r=t.axis.includes("y")?o/2:0;gsap.ticker.add((()=>{gsap.set(e,{attr:{d:spline(x,t.tension,t.close)}})})),window.addEventListener("pointermove",(e=>{let{x:a,y:o}=i(e);y.x=a,y.y=o,x.forEach(((e,a)=>{let x=s[a],i=Math.abs(x.x-y.x),o=Math.abs(x.y-y.y);if(i<=t.range.x&&o<=t.range.y){let t={x:x.x-y.x,y:x.y-y.y},a={x:x.x+t.x,y:x.y+t.y},s=gsap.utils.clamp(x.x-n,x.x+n,a.x),i=gsap.utils.clamp(x.y-r,x.y+r,a.y);gsap.to(e,{x:s,y:i,ease:"sine",overwrite:!0,duration:.175,onComplete(){gsap.to(e,{x:x.x,y:x.y,ease:"elastic.out(1, 0.3)",duration:1.25})}})}}))}))};

let prefersReducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

  if (prefersReducedMotionQuery && !prefersReducedMotionQuery.matches) {
  createLiquidPath(bottone_svg, {
    detail: 32,
    tension: 1,
    close: true,
    range: {
      x: 14,
      y: 40
    },
    axis: ["y"]
  });
}
//end

});
};

/*mobile VS dekstop href*/
let tel_link = document.querySelector('.tel');
let tel_link_2 = document.querySelector('.tel_2');
let in_app = document.querySelector('.ig');
let wa_link = document.querySelector('.share_wa');
wa_link.href = 'https://wa.me/393294617617?text=Ho visto questo sito da cellulare: '+ location.href +' e vorrei un preventivo';
let sharer = document.querySelector('.sharer');
let side_share = document.querySelector('.side_share_desktop');
let side_share_class = side_share.classList;
//side_share_class.remove('active');

let close_side_sharer = document.querySelectorAll('.close_side');

if(window.matchMedia("(pointer: fine)").matches) {
  let new_tel_text = tel_link.childNodes[2];
 new_tel_text.nodeValue = '+39.3294617617';

let new_tel_text_2 = tel_link_2.childNodes[2];
 new_tel_text_2.nodeValue = '+39. 02.94.38.32.93';
 
    in_app.href = 'https://www.instagram.com/why.not.media/'; 
  wa_link.href = 'https://wa.me/393294617617?text=Ho%20visto%20il%20sito%20dal%20%pc20e%20ono%20interessato%20ad%20un%20preventivo%20UX';
};//endif

/*sharer*/
let shareBtn = document.querySelector(".share_me"),
  title = document.title,
  text = document.querySelector('meta[name="description"]')
    .getAttribute("content"),
  url = document.location.href;


shareBtn.addEventListener("click", function(ev) {
  if (navigator.share) {
    navigator
      .share({text: title,url: url })
            .then(() => {
        console.log("Grazie per la condivisione!");
      })
    .catch(console.error);
  } else {
    side_share_class.toggle('active');
  }
});


/*test2*/

async function close_side(){
close_side_sharer.forEach(close_me => {
  close_me.addEventListener('click', event => {
    //handle click
side_share_class.toggle('active');
    //handle
  })
})
};
close_side();

/*sharer desk*/

let pageLink = document.location.href;
let pageTitle = String(document.title).replace(/\&/g, '%26');

/*centerrr*/
function popup_share(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
    return window.open(url, windowName, `titlebar=0, toolbar=no, location=no, location=0, directories=no, status=no, menubar=no, scrollbars=no, resizable=0, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}
/*centerrr*/

async function fbs_click() { popup_share(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,'sharer',window,800,500);return false; };
      
async function tbs_click() { popup_share(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,'sharer',window,800,500);return false; };

async function lbs_click() { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,'sharer',window,800,500);return false; };

/*extra link mailto*/
async function send_this_link(href) {
                let subject= "Sito interessante ed istruttivo";
                let body = "Dai uno sguardo anche tu su questa pagina:\r\n\r\n";
                body += window.location.href;
                body += "\xa0";
                let uri = 'mailto:?subject=';
                uri += encodeURIComponent(subject);
                uri += "&body=";
                uri += encodeURIComponent(body);
                window.open(uri);
            };
