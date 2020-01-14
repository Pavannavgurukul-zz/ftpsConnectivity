var os = require('os');
if (os.platform() == 'win32') {  
    if (os.arch() == 'ia32') {
        var chilkat = require('@chilkat/ck-node11-win-ia32');
    } else {
        var chilkat = require('@chilkat/ck-node11-win64'); 
    }
} else if (os.platform() == 'linux') {
    if (os.arch() == 'arm') {
        var chilkat = require('@chilkat/ck-node11-arm');
    } else if (os.arch() == 'x86') {
        var chilkat = require('@chilkat/ck-node11-linux32');
    } else {
        var chilkat = require('@chilkat/ck-node11-linux64');
    }
} else if (os.platform() == 'darwin') {
    var chilkat = require('@chilkat/ck-node11-macosx');
}

function chilkatExample() {

    // The Chilkat API can be unlocked for a fully-functional 30-day trial by passing any
    // string to the UnlockBundle method.  A program can unlock once at the start. Once unlocked,
    // all subsequently instantiated objects are created in the unlocked state. 
    // 
    // After licensing Chilkat, replace the "Anything for 30-day trial" with the purchased unlock code.
    // To verify the purchased unlock code was recognized, examine the contents of the LastErrorText
    // property after unlocking.  For example:
    var glob = new chilkat.Global();
    var success = glob.UnlockBundle("Anything for 30-day trial");
    if (success !== true) {
        console.log(glob.LastErrorText);
        return;
    }

    var status = glob.UnlockStatus;
    if (status == 2) {
        console.log("Unlocked using purchased unlock code.");
    }
    else {
        console.log("Unlocked in trial mode.");
    }

    // The LastErrorText can be examined in the success case to see if it was unlocked in
    // trial more, or with a purchased unlock code.
    console.log(glob.LastErrorText);

}

chilkatExample();
