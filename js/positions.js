const positionDetails = {
  goalkeeper: {
    title: "Goalkeeper (GK)",
    text: "The last line of defense. The only player allowed to use their hands, but only inside their own penalty area. Responsible for shot-stopping, commanding the box on crosses, and starting attacks with throws or long kicks.",
  },
  fullback: {
    title: "Fullback (LB / RB)",
    text: "Defends the wide areas but also supports attacks by overlapping down the flank and delivering crosses. Needs stamina to sprint up and down the sideline all match.",
  },
  centerback: {
    title: "Center Back (CB)",
    text: "The central defensive anchor. Marks opposing strikers, wins headers on crosses and set pieces, and organizes the defensive line to catch attackers offside.",
  },
  midfielder: {
    title: "Midfielder (CM / CDM)",
    text: "The engine room of the team. Links defense and attack, controls possession, and a defensive midfielder (CDM) sits in front of the back line to break up opposing attacks.",
  },
  winger: {
    title: "Winger (LW / RW)",
    text: "An attacking player who stays wide, uses speed and dribbling to beat defenders, and cuts inside or crosses the ball for teammates to finish chances.",
  },
  striker: {
    title: "Striker (ST)",
    text: "The team's primary goal-scoring threat. Stays high up the pitch, makes runs behind the defense, and is usually judged on how many goals they put in the net.",
  },
};

const dots = document.querySelectorAll(".player-dot");
const infoBox = document.getElementById("position-info");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    dots.forEach((d) => d.classList.remove("selected"));
    dot.classList.add("selected");

    const key = dot.dataset.position;
    const details = positionDetails[key];
    infoBox.innerHTML = `<h3>${details.title}</h3><p>${details.text}</p>`;
  });
});
