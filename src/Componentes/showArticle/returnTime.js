const ReturnTime = (time) => {
    const postTime = new Date(time).getTime();
    const currentTime = Date.now();
    const TimeDifference = currentTime - postTime;

    const seconds = Math.floor(TimeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} dias atrás`;
    } else if(hours > 0) {
        return `${hours} horas atrás`;
    } else if(minutes > 0) {
        return `${minutes} horas atrás`;
    }

}

export default ReturnTime;