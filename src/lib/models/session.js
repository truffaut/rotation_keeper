export default class Session {
  constructor(participants) { 
    this.participants = participants;
  }

  start() {
    participants.forEach(participant => {
      console.log(participant.fullName);
    });
  }
}
