import { format } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import id from "date-fns/locale/id"

export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR' 
    }).format(number);
  };
  
  export const parseRupiah = (rupiah) => {
    const cleaned = rupiah.replace(/[Rp.,\s]/g, ''); 
    return parseInt(cleaned, 10) || 0; 
  };
  


  export const formatWib = (date) =>{
    const timeZone = "Asia/Jakarta";
    const utcDate = fromZonedTime(date, timeZone);
    const zonedDate = toZonedTime (utcDate, timeZone);

    return format(zonedDate, "dd MMMM yyyy HH:mm", { locale: id });
  }