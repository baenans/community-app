const functions = require('firebase-functions');

exports.updateVotes = functions.database.ref('/meme-votes/{memeId}')
  .onWrite((event) => {
    const votes = event.data.val();
    let sum = Object.keys(votes)
      .map(function(k) {return votes[k];})
      .reduce((a, b) => a + b, 0);
    var node = event.data.ref.parent.parent;
    return node.child(`/memes/${event.params.memeId}/votes`).set(sum);
  });
