


// function imgSlider(anything){
//   document.querySelector('.starbucks').src = anything;
// }

var selState = selState = simplemaps_usmap_mapdata.state_specific['NY'];
document.getElementById("stateInput").innerHTML=selState.name;

simplemaps_usmap.hooks.click_state = function(id){
  document.getElementById("stateInput").innerHTML=simplemaps_usmap_mapdata.state_specific[id].name;
  selState = simplemaps_usmap_mapdata.state_specific[id];
}

var firstCandidateVoteCount = 0
var secondCandidateVoteCount = 0;

var voteRecord = [];

var candidates = document.querySelectorAll('.el-img');

document.getElementById('vote-btn').addEventListener('click', processVote);

function processVote(e){
 
  var candidate = document.querySelector('input[name="radio"]:checked').value;

  var check = voteRecord.filter(function(r){
    return r.state === selState.name;
  });

  if(check.length < 1){
    if(candidate=='a'){
      firstCandidateVoteCount++;
      voteRecord.push({
        candidate: 'a',
        state: selState.name
      });
    }else{
      secondCandidateVoteCount++;
      voteRecord.push({
        candidate: 'b',
        state: selState.name
      });
    }

    document.getElementById('progress').value = firstCandidateVoteCount/(firstCandidateVoteCount+secondCandidateVoteCount) * 100;
    
    updateVoteCount();
  }
}

function updateVoteCount(){
  document.getElementById('aCount').innerHTML = firstCandidateVoteCount + (firstCandidateVoteCount > 1 ? ' Votes' : ' Vote');
  document.getElementById('bCount').innerHTML = secondCandidateVoteCount + (secondCandidateVoteCount > 1 ? ' Votes' : ' Vote')
}
updateVoteCount();