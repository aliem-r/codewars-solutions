// https://www.codewars.com/kata/5574835e3e404a0bed00001b/

function getParticipants(handshakes) {
    if (handshakes == 0) return 0;
    p = 0;
    do {
        p++;
        handshakes -= p;
    } while (handshakes > 0);
    return p + 1;
}
