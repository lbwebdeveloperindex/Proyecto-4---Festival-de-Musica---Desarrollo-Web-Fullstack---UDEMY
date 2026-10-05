import { src, dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function js( done ) {
    src('src/js/app.js')
        .pipe( dest('build/js') )

    done()
}

export function css( done ) {
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: '.'}) ) // '.' genera un archivo .map de css de forma externa, {sourcemaps: true} lo hace de fomra interna

    done(); //Avisa que se finaliza la función
} 

// Export permite utilizar la función en otro archivo, se agrega en el package.json  "start": "gulp start"
// Agregar   "type": "module", después de description en package.json para poder exportar las funciones

export function dev(done) {
    watch('src/scss/**/*.scss', css) //Watch permite que al efectuar un cambio en un tipo de archivo del que se pasa en el atributo 1, se ejecute la función del atributo 2
    watch('src/js/**/*.js', js)
    done()
}

export default series(js, css, dev) // Ejecuta en serie las funciones que se le pase, se ejecuta automáticamente por ser default