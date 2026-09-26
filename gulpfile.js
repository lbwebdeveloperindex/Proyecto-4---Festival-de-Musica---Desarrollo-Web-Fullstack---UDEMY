import { src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function css( done ) {
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done(); //Avisa que se finaliza la función
} 

// Export permite utilizar la función en otro archivo, se agrega en el package.json  "start": "gulp start"
// Agregar   "type": "module", después de description en package.json para poder exportar las funciones

export function dev() {
    watch('src/scss/app.scss' ,css)
}