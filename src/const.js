// Конвертирует минуты в формат Д:Ч:М

export const convertMinutes = (num) => {
  const hours = Math.floor(num / 60);
  const days = Math.floor(hours / 24);
  const rhours = hours - days * 24;
  const minutes = Math.floor(num % 60);

  const formatExample = {
    Д: days < 10 ? '0' + days : days,
    Ч: rhours < 10 ? '0' + rhours : rhours,
    М: minutes < 10 ? '0' + minutes : minutes,
  };

  if (num === 0) {
    return num;
  }

  return Object.keys(formatExample).map((item) =>
    formatExample[item] > 0 ? formatExample[item] + item : ' ').join(' ').trim();
};

export function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

// Добавляет нули

export function getNewHours(date, minutes) {
  return addMinutes(date, minutes).getHours() < 10 ? 
         '0' + addMinutes(date, minutes).getHours() : addMinutes(date, minutes).getHours();
}

export function getNewMinutes(date, minutes) {
  return addMinutes(date, minutes).getMinutes() < 10 ? 
         '0' + addMinutes(date, minutes).getMinutes() : addMinutes(date, minutes).getMinutes();
}

// Меняет слово пересадка взависимости от кло-ва пересадок

export function getTransferName(stops) {
  return stops.length > 1 ? 'пересадки' : stops.length < 1 ? `пересадок` : 'пересадка';
}

// Количество отображаемых билетов

export const ticketsValue = 5;