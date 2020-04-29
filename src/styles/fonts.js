import nunito400EOT from "../fonts/nunito/nunito-v12-latin-regular.eot";
import nunito400SVG from "../fonts/nunito/nunito-v12-latin-regular.svg";
import nunito400TTF from "../fonts/nunito/nunito-v12-latin-regular.ttf";
import nunito400WOFF from "../fonts/nunito/nunito-v12-latin-regular.woff";
import nunito400WOFF2 from "../fonts/nunito/nunito-v12-latin-regular.woff2";
import nunito600EOT from "../fonts/nunito/nunito-v12-latin-600.eot";
import nunito600SVG from "../fonts/nunito/nunito-v12-latin-600.svg";
import nunito600TTF from "../fonts/nunito/nunito-v12-latin-600.ttf";
import nunito600WOFF from "../fonts/nunito/nunito-v12-latin-600.woff";
import nunito600WOFF2 from "../fonts/nunito/nunito-v12-latin-600.woff2";
import lato700EOT from "../fonts/lato/lato-v16-latin-700.eot";
import lato700SVG from "../fonts/lato/lato-v16-latin-700.svg";
import lato700TTF from "../fonts/lato/lato-v16-latin-700.ttf";
import lato700WOFF from "../fonts/lato/lato-v16-latin-700.woff";
import lato700WOFF2 from "../fonts/lato/lato-v16-latin-700.woff2";

export default `
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url('${nunito400EOT}'); /* IE9 Compat Modes */
  src: local('Nunito Regular'), local('Nunito-Regular'),
      url('${nunito400EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('${nunito400WOFF2}') format('woff2'), /* Super Modern Browsers */
      url('${nunito400WOFF}') format('woff'), /* Modern Browsers */
      url('${nunito400TTF}') format('truetype'), /* Safari, Android, iOS */
      url('${nunito400SVG}#Nunito') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  src: url('${nunito600EOT}'); /* IE9 Compat Modes */
  src: local('Nunito Regular'), local('Nunito-Regular'),
      url('${nunito600EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('${nunito600WOFF2}') format('woff2'), /* Super Modern Browsers */
      url('${nunito600WOFF}') format('woff'), /* Modern Browsers */
      url('${nunito600TTF}') format('truetype'), /* Safari, Android, iOS */
      url('${nunito600SVG}#Nunito') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: url('${lato700EOT}'); /* IE9 Compat Modes */
  src: local('Lato Bold'), local('Lato-Bold'),
     url('${lato700EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
     url('${lato700WOFF2}') format('woff2'), /* Super Modern Browsers */
     url('${lato700WOFF}') format('woff'), /* Modern Browsers */
     url('${lato700TTF}') format('truetype'), /* Safari, Android, iOS */
     url('${lato700SVG}#Lato') format('svg'); /* Legacy iOS */
}

`;
