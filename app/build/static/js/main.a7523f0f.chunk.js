(this["webpackJsonpcandy-drop"]=this["webpackJsonpcandy-drop"]||[]).push([[0],{115:function(e,t,n){"use strict";(function(e){var r=n(1),a=n.n(r),c=n(10),i=n(12),s=n(4),o=n(13),u=n(23),l=n(2),d=n(20),p=n(11),b=n(119),f=(n(205),n(121)),m=n(30),x=n(16),g=b.a.metadata,j=g.Metadata,v=g.MetadataProgram,h=new d.d.PublicKey("CCcQfZ3ni1wH6u14EtAbA1iiSaJdgsfTFYqSCM2DB9ip"),y=d.d.SystemProgram,w="processed";t.a=function(t){var n=t.walletAddress,r=Object(u.useState)(null),b=Object(o.a)(r,2),g=b[0],O=b[1],k=Object(u.useState)([]),S=Object(o.a)(k,2),N=S[0],K=S[1],P=Object(u.useState)(!1),D=Object(o.a)(P,2),A=D[0],M=D[1],B=Object(u.useState)(!1),L=Object(o.a)(B,2),T=L[0],I=L[1];Object(u.useEffect)((function(){R()}),[]);var R=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,s,o,u,l,p,b,f,x,g,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(),e.next=3,d.a.fetchIdl(m.c,t);case 3:return n=e.sent,r=new d.a(n,m.c,t),e.next=7,r.account.candyMachine.fetch("BBZP2jpjn4XVXNwCEqDpHLd25GnRknyRggzdZxMU1bWE");case 7:return s=e.sent,o=s.data.itemsAvailable.toNumber(),u=s.itemsRedeemed.toNumber(),l=o-u,p=s.data.goLiveDate.toNumber(),b="".concat(new Date(1e3*p).toLocaleDateString()," @ ").concat(new Date(1e3*p).toLocaleTimeString()),O({itemsAvailable:o,itemsRedeemed:u,itemsRemaining:l,goLiveData:p,goLiveDateTimeString:b}),console.log({itemsAvailable:o,itemsRedeemed:u,itemsRemaining:l,goLiveData:p,goLiveDateTimeString:b}),I(!0),e.next=18,E("BBZP2jpjn4XVXNwCEqDpHLd25GnRknyRggzdZxMU1bWE",!0);case 18:if(0===(f=e.sent).length){e.next=36;break}x=Object(i.a)(f),e.prev=21,j=a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.value,e.next=3,fetch(t.data.uri);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log("Past Minted NFT",t),N.find((function(e){return e===r.image}))||K((function(e){return[].concat(Object(c.a)(e),[r.image])}));case 9:case"end":return e.stop()}}),e)})),x.s();case 24:if((g=x.n()).done){e.next=28;break}return e.delegateYield(j(),"t0",26);case 26:e.next=24;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(21),x.e(e.t1);case 33:return e.prev=33,x.f(),e.finish(33);case 36:I(!1);case 37:case"end":return e.stop()}}),e,null,[[21,30,33,36]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=new l.Connection("https://explorer-api.devnet.solana.com");return new d.b(e,window.solana,w)},E=function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r,c,i,s,o,u,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new d.d.Connection("https://explorer-api.devnet.solana.com"),e.next=3,v.getProgramAccounts(r,{filters:[{memcmp:{offset:326,bytes:t}}]});case 3:c=e.sent,i=[],s=0;case 6:if(!(s<c.length)){e.next=16;break}return o=c[s],e.next=10,r.getParsedAccountInfo(o.pubkey);case 10:u=e.sent,l=new j(t.toString(),u.value),n?i.push(l.data):i.push(l.data.mint);case 13:s++,e.next=6;break;case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.PublicKey.findProgramAddress([e.from("metadata"),m.b.toBuffer(),n.toBuffer()],m.b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.PublicKey.findProgramAddress([e.from("metadata"),m.b.toBuffer(),n.toBuffer(),e.from("edition")],m.b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.d.PublicKey.findProgramAddress([t.toBuffer(),p.e.toBuffer(),n.toBuffer()],m.a);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(a.a.mark((function e(){var t,r,c,i,o,u,b,f,x,g,j,v,w,O;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),t=d.d.Keypair.generate(),e.next=5,U(n.publicKey,t.publicKey);case 5:return r=e.sent,e.next=8,W(t.publicKey);case 8:return c=e.sent,e.next=11,Z(t.publicKey);case 11:return i=e.sent,"https://explorer-api.devnet.solana.com",o=new l.Connection("https://explorer-api.devnet.solana.com"),e.next=16,o.getMinimumBalanceForRentExemption(p.c.span);case 16:return u=e.sent,b={config:h,candyMachine:"BBZP2jpjn4XVXNwCEqDpHLd25GnRknyRggzdZxMU1bWE",payer:n.publicKey,wallet:"8rLaSgZzyNNN4Rcvf3BGAQkAcA86wBB4rkdDFe4VHjCV",mint:t.publicKey,metadata:c,masterEdition:i,mintAuthority:n.publicKey,updateAuthority:n.publicKey,tokenMetadataProgram:m.b,tokenProgram:p.e,systemProgram:y.programId,rent:d.d.SYSVAR_RENT_PUBKEY,clock:d.d.SYSVAR_CLOCK_PUBKEY},f=[t],x=[d.d.SystemProgram.createAccount({fromPubkey:n.publicKey,newAccountPubkey:t.publicKey,space:p.c.span,lamports:u,programId:p.e}),p.f.createInitMintInstruction(p.e,t.publicKey,0,n.publicKey,n.publicKey),Y(r,n.publicKey,n.publicKey,t.publicKey),p.f.createMintToInstruction(p.e,t.publicKey,r,n.publicKey,[],1)],g=C(),e.next=23,d.a.fetchIdl(m.c,g);case 23:return j=e.sent,v=new d.a(j,m.c,g),e.next=27,v.rpc.mintNft({accounts:b,signers:f,instructions:x});case 27:w=e.sent,console.log("txn:",w),o.onSignatureWithOptions(w,function(){var e=Object(s.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("status"!==t.type){e.next=8;break}if(console.log("Receievd status event"),t.result.err){e.next=8;break}return console.log("NFT Minted!"),M(!1),e.next=8,R();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{commitment:"processed"}),e.next=38;break;case 32:e.prev=32,e.t0=e.catch(0),O=e.t0.msg||"Minting failed! Please try again!",M(!1),e.t0.msg?311===e.t0.code?O="SOLD OUT!":312===e.t0.code&&(O="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?O="SOLD OUT!":e.t0.message.indexOf("0x135")&&(O="Insufficient funds to mint. Please fund your wallet.")),console.warn(O);case 38:case"end":return e.stop()}}),e,null,[[0,32]])})));return function(){return e.apply(this,arguments)}}(),Y=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:d.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:p.e,isSigner:!1,isWritable:!1},{pubkey:d.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new d.d.TransactionInstruction({keys:c,programId:m.a,data:e.from([])})};return g&&Object(x.jsxs)("div",{className:"machine-container",children:[function(){var e=new Date,t=new Date(1e3*g.goLiveData);return e<t?(console.log("Before drop date!"),Object(x.jsx)(f.a,{dropDate:t})):Object(x.jsx)("p",{children:"Drop Date: ".concat(g.goLiveDateTimeString)})}(),Object(x.jsx)("p",{children:"Drop Date: ".concat(g.goLiveDateTimeString)}),Object(x.jsx)("p",{children:"Items Minted: ".concat(g.itemsRedeemed," / ").concat(g.itemsAvailable)}),g.itemsRedeemed===g.itemsAvailable?Object(x.jsx)("p",{className:"sub-text",children:"Sold Out \ud83d\ude4a"}):Object(x.jsx)("button",{className:"cta-button mint-button",onClick:V,disabled:A,children:"Mint NFT"}),T&&Object(x.jsx)("p",{children:"LOADING MINTS..."}),N.length>0&&Object(x.jsxs)("div",{className:"gif-container",children:[Object(x.jsx)("p",{className:"sub-text",children:"Minted Items \u2728"}),Object(x.jsx)("div",{className:"gif-grid",children:N.map((function(e){return Object(x.jsx)("div",{className:"gif-item",children:Object(x.jsx)("img",{src:e,alt:"Minted NFT ".concat(e)})},e)}))})]})]})}}).call(this,n(9).Buffer)},121:function(e,t,n){"use strict";var r=n(13),a=n(23),c=(n(206),n(16));t.a=function(e){var t=e.dropDate,n=Object(a.useState)(""),i=Object(r.a)(n,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){console.log("Setting interval...");var e=setInterval((function(){var n=(new Date).getTime(),r=t-n,a=Math.floor(r/864e5),c=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4),s=Math.floor(r%6e4/1e3);o("".concat(a,"d ").concat(c,"h ").concat(i,"m ").concat(s,"s")),r<0&&(console.log("Clearing interval..."),clearInterval(e))}),1e3);return function(){e&&clearInterval(e)}}),[]),Object(c.jsxs)("div",{className:"timer-container",children:[Object(c.jsx)("p",{className:"timer-header",children:"Candy Drop Starting In"}),s&&Object(c.jsx)("p",{className:"timer-value",children:"\u23f0 ".concat(s)})]})}},128:function(e,t,n){},129:function(e,t,n){},132:function(e,t){},133:function(e,t){},161:function(e,t){},162:function(e,t){},205:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r),c=n(114),i=n.n(c),s=(n(128),n(1)),o=n.n(s),u=n(4),l=n(13),d=(n(129),n.p+"static/media/twitter-logo.d89d9a86.svg"),p=n(115),b=n(16),f="_buildspace",m="https://twitter.com/".concat(f),x=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:r=e.sent,console.log("Connected with Public Key:",r.publicKey.toString()),a(r.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:r=e.sent,console.log("Connected with Public Key:",r.publicKey.toString()),a(r.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("p",{className:"header",children:"\ud83c\udf6d Candy Drop"}),Object(b.jsx)("p",{className:"sub-text",children:"NFT drop machine with fair mint"}),!n&&Object(b.jsx)("button",{className:"cta-button connect-wallet-button",onClick:i,children:"Connect to Wallet"})]}),n&&Object(b.jsx)(p.a,{walletAddress:window.solana}),Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:d}),Object(b.jsx)("a",{className:"footer-text",href:m,target:"_blank",rel:"noreferrer",children:"built on @".concat(f)})]})]})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},30:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(20),a=new r.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),c=new r.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),i=new r.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")}},[[208,1,2]]]);
//# sourceMappingURL=main.a7523f0f.chunk.js.map