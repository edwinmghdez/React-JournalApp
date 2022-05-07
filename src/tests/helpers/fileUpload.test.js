import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornar el URL', async() => {
        const resp = await fetch('https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        console.log(url);

        expext(typeof url).toBe('string');
    });
});