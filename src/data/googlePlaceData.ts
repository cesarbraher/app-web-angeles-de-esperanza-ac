export interface GooglePlaceInfo {
  name: string;
  category: string;
  address: string;
  plusCode: string;
  hoursLabel: string;
  hoursDetail: string;
  phone: string;
  phoneRaw: string;
  website: string;
  websiteDisplay: string;
  placeId: string;
  featureId: string;
  cid: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  shortUrl: string;
  placeUrl: string;
  directionsUrl: string;
  writeReviewUrl: string;
  embedUrl: string;
}

export const GOOGLE_PLACE_INFO: GooglePlaceInfo = {
  name: 'Ángeles de Esperanza A.C.',
  category: 'Centro de rehabilitación',
  address: 'Plan de Iguala 1855, Guerrero, 36520 Irapuato, Gto., México',
  plusCode: 'MJFM+6G Irapuato, Guanajuato',
  hoursLabel: 'Abierto las 24 horas',
  hoursDetail: 'Lunes a domingo · Atención continua',
  phone: '+52 462 635 5929',
  phoneRaw: '524626355929',
  website: 'https://angelesdeesperanzaac.org/',
  websiteDisplay: 'angelesdeesperanzaac.org',
  placeId: 'ChIJh3SAAAB_LIQRty8MMC7LAtw',
  featureId: '0x842c7f0000807487:0xdc02cb2e300c2fb7',
  cid: '15853457037532606391',
  coordinates: {
    lat: 20.6730989,
    lng: -101.3662137,
  },
  shortUrl: 'https://maps.app.goo.gl/AG87og1HwZdNRKbU8',
  placeUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJh3SAAAB_LIQRty8MMC7LAtw',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=20.6730989,-101.3662137&destination_place_id=ChIJh3SAAAB_LIQRty8MMC7LAtw',
  writeReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJh3SAAAB_LIQRty8MMC7LAtw',
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.913364855891!2d-101.3662137!3d20.6730989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7f0000807487%3A0xdc02cb2e300c2fb7!2s%C3%81ngeles%20de%20Esperanza%20A.C.!5e0!3m2!1ses!2smx!4v1795390000000!5m2!1ses!2smx',
};
