const minToHours = (min) =>{
  let minutes = min % 60;
  let hours = (min - minutes)/60;


  const fmtHours = hours >= 10 ? hours : `0${hours}`;
  const fmtMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${fmtHours}:${fmtMinutes}`;

}

minToHours(87)
