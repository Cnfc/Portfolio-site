!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";$(document).ready(function(){$("body, .left_side").niceScroll({horizrailenabled:!1}),$(".btn_mnu").click(function(){$(this).toggleClass("active"),$(".left_side").toggleClass("active")});var e=new freewall(".gallery");e.reset({selector:"a",animate:!0,cellW:150,cellH:"auto",gutterX:5,gutterY:5,onResize:function(){e.fitWidth()}}),e.container.find("a").find("img").load(function(){e.fitWidth()}),$(".filter_label").click(function(){$(".filter_label").removeClass("active");var t=$(this).addClass("active").data("filter");e.filter(t),setTimeout(function(){$(window).resize(),e.fitWidth()},400)}),$(".count_element").on("click",function(){return ga("send","event","goal","goal"),yaCounterXXXXXXXX.reachGoal("goal"),!0}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("#callback").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){alert("Thanks for your request!"),setTimeout(function(){},1e3)}),!1})}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(400).fadeOut("slow")})}]);