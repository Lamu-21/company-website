@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

:root{
    --orange:#FF9814;
}

*{
    font-family: 'Open Sans', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline:none;
    border:none;
    text-transform: capitalize;
    transition: all .2s linear;
}

*::selection{
    background:var(--orange);
    color:#fff;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

section{
    padding:0 7%;
    padding-top: 12rem;
}

.btn{
    font-size: 2rem;
    padding:.7rem 3rem;
    background:var(--orange);
    color:#fff;
    margin-top: 1rem;
    cursor: pointer;
}

.btn:hover{
    background:#333;
}

header{
    position: fixed;
    top:0; left: 0;
    z-index: 1000;
    background:#fff;
    box-shadow: 0 .1rem .3rem rgba(0,0,0,.3);
    width:100%;
}

header .heading{
    font-size: 3rem;
    color:#666;
    padding:1rem;
    text-align: center;
}

header #menu{
    font-size: 3rem;
    color:#666;
    cursor: pointer;
    margin:1rem;
    display: none;
}

header .navbar ul{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    background:var(--orange);
    padding:1rem; 
}

header .navbar ul li{
    margin:0 1.5rem;
}

header .navbar ul li a{
    font-size: 2rem;
    color:#fff;
}

header .navbar ul li a:hover{
    color:#444;
}

.home{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background:url(../images/home-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    flex-wrap: wrap;
}

.home .image{
    flex:1 1 40rem;
}

.home .image img{
    width:100px;
}

.home .content{
    flex:1 1 40rem;
}

.home .content h1{
    font-size: 5rem;
    color:#444;
}

.home .content p{
    font-size: 1.8rem;
    color:#666;
    padding:1rem 0;
}

.about{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 2rem;
}

.about .image{
    flex:1 1 40rem;
}

.about .image img{
    width:100%;
}

.about .content{
    flex:1 1 40rem;
}

.about .content h1{
    font-size: 5rem;
    color:#444;
}

.about .content p{
    font-size: 1.6rem;
    color:#666;
    padding:1rem 0;
}

.service{
    min-height: 100vh;
    background:#eee;
}

.service .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding:2rem 0;
}

.service .box-container .box{
    background:#fff;
    margin:2rem;
    padding:1rem;
    width:30rem;
    text-align: center;
    box-shadow: 0 0 .3rem rgba(0,0,0,.3);
}

.service .box-container .box i{
    font-size: 4rem;
    padding:1rem;
    color:var(--orange);
}

.service .box-container .box h3{
    font-size: 2rem;
    color:#444;
}

.service .box-container .box p{
    font-size: 1.3rem;
    color:#666;
    padding:1rem;
}

.plan{
    min-height: 100vh;
    background:#eee;
}

.plan .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding:2rem 0;
}

.plan .box-container .box{
    background:#fff;
    margin:1rem;
    padding:2rem;
    width:35rem;
    text-align: center;
    box-shadow: 0 0 .3rem rgba(0,0,0,.3);
    position: relative;
}

.plan .box-container .box .title{
    font-size: 3rem;
    color:#666;
    padding:1rem 0;
}

.plan .box-container .box .price{
    background:var(--orange);
    color:#fff;
    border-radius: 50%;
    margin:1rem auto;
    height:13rem;
    width:13rem;
    line-height: 13rem;
    text-align: center;
    font-size: 2.9rem;
}

.plan .box-container .box .price span{
    font-size: 2rem;
}

.plan .box-container .box ul li{
    color:#666;
    list-style: none;
    font-size: 1.7rem;
    padding:1rem 0;
}

.contact{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.contact form{
    flex:1 1 40rem;
    padding:2rem;
    margin:1rem;
    margin-top: 4rem;
    box-shadow: 0 0 .5rem rgba(0,0,0,.3);
}

.contact .content{
    flex:1 1 40rem;
    padding:3rem 1rem;
}

.contact form .box{
    width:100%;
    color:#333;
    height:4rem;
    font-size: 1.7rem;
    border-bottom: .2rem solid rgba(0,0,0,.3);
    text-transform: none;
    margin:1rem 0;
}

.contact form .box::placeholder{
    text-transform: capitalize;
}

.contact form .box:focus{
    border-color: var(--orange);
}

.contact form .message{
    height:15rem;
    resize: none;
}

.contact .content h3{
    font-size: 4rem;
    color:#444;
}

.contact .content p{
    font-size: 1.8rem;
    color:#666;
    padding:1rem 0;
}

.contact .content .icons{
    font-size: 1.7rem;
    color:#333;
    padding:.7rem 0;
}

.contact .content .icons i{
    padding-right: .5rem;
    color:var(--orange);
}

.footer{
    background:#333;
}

.footer .box-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.footer .box-container .box{
    margin:2rem;
    flex:1 1 30rem;
}

.footer .box-container .box h3{
    font-size: 2.5rem;
    color:#fff;
}

.footer .box-container .box p{
    font-size: 1.4rem;
    color:#eee;
    padding:1rem 0;
}

.footer .box-container .box a{
    font-size: 1.8rem;
    color:#eee;
    padding:.4rem 0;
    display: block;
}

.footer .box-container .box a:hover{
    text-decoration: underline;
}

.footer .box-container .box:nth-child(2){
    text-align: center;
}

.footer .box-container form{
    display: flex;
    align-items: center;
}

.footer .box-container form input[type="email"]{
    height:4.1rem;
    width:100%;
    font-size: 1.7rem;
    padding:0 1rem;
}

.footer .box-container form .btn{
    margin-top: 0;
}

.footer .box-container form .btn:hover{
    color:#333;
    background:#ccc;
}

.footer .credit{
    font-size: 2rem;
    background:#222;
    text-align: center;
    color:#fff;
    padding:2rem 1rem;
    font-weight: normal;
}

.footer .credit a{
    color:var(--orange);
}











/* media queries  */

@media (max-width:768px){

    html{
        font-size: 55%;
    }

    .home .content{
        text-align: center;
    }

    .home .content h1{
        font-size: 4rem;
    }

    .about .content h1{
        font-size: 4rem;
    }

}

@media (max-width:500px){

    html{
        font-size: 50%;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 1rem;
    }

    header #menu{
        display: block;
    }

    header .navbar{
        position: fixed;
        top:6.2rem; right:-120%;
        height:100%;
        width:100%;
        border-top: .2rem solid rgba(0,0,0,.3);
    }

    header .navbar ul{
        height:100%;
        width:100%;
        flex-flow: column;
        background:#fff;
        padding-bottom: 15rem;
    }

    header .navbar ul li{
        text-align: center;
        width:100%;
        margin:1rem 0;
    }

    header .navbar ul li a{
        font-size: 4rem;
        color:#333;
        display: block;
    }

    header .navbar ul li a:hover{
        color:var(--orange);
    }

    .fa-times{
        transform: rotate(180deg);
    }

    header .navbar.nav-toggle{
        right:0;
    }

    section{
        padding-top: 5rem;
    }

    .footer .box-container .box:last-child{
        text-align: center;
    }

    .footer .box-container .box:last-child p{
        font-size: 1.7rem;
    }

    .footer .box-container .box:last-child form{
        flex-flow: column;
    }

    .footer .box-container .box:last-child form .btn{
        margin-top: 1rem;
        width:100%;
    }

}