#pragma strict

var bystanderTexture : Texture;
var bystanderHitTexture : Texture;
var bystanderLeeway : int;
var loseTexture : Texture;
var gun : GameObject;
var targetTexture : Texture;
var winTexture : Texture;

private var aliveNpcs : int;
private var targetEnabled : boolean;
private var won : boolean;
private var sentWin : boolean;
private var lost : boolean;
private var sentLose : boolean;

function Start() {
  aliveNpcs = bystanderLeeway;
  targetEnabled = false;
  won = false;
  sentWin = false;
  lost = false;
  sentWin = false;
}

function KilledNpc() {
  aliveNpcs -= 1;
}

function KilledTarget() {
  won = true;
}

@RPC
function Lose() {
  sentWin = true;
  lost = true;
}

@RPC
function Win() {
  sentLose = true;
  won = true;
}

function OnGUI() {
  if (gun.active) {
    for (var i = 0; i < bystanderLeeway; ++i) {
      GUI.DrawTexture(new Rect(10 + 96 * i, 10, 128, 128), i < aliveNpcs ? bystanderTexture : bystanderHitTexture);
    }
  }
  if (targetEnabled) {
    GUI.DrawTexture(new Rect(Screen.width - 138, 10, 128, 128), targetTexture);
  }
  if (aliveNpcs <= 0 && !sentWin) {
    networkView.RPC("Win", RPCMode.Others);
    sentWin = true;
  }
  if (won && !sentLose) {
    networkView.RPC("Lose", RPCMode.Others);
  }
  if (lost || aliveNpcs <= 0) {
    GUI.DrawTexture(new Rect(Screen.width / 2 - 400, Screen.height / 2 - 300, 800, 600), loseTexture);
  } else if (won) {
    GUI.DrawTexture(new Rect(Screen.width / 2 - 400, Screen.height / 2 - 300, 800, 600), winTexture);
  }
}

function EnableTargetGui() {
  targetEnabled = true;
}