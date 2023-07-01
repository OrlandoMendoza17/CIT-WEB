import { formatDistanceToNow, isValid } from "date-fns";
import { es } from "date-fns/locale";

export const howLong = (date: Date): string =>{
  const options = {
    locale: es, 
    addSuffix: true,
    includeSeconds: true,
  }
  
  if(!isValid(date)) return "";
  
  const dateString = formatDistanceToNow(date, options).split("alrededor de ").join("")
  return dateString;
}
