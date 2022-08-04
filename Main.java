public class Main {

    public static void main(String[] args) {
        // Creo un nuevo objeto a partir de la clase e invoco la función de la clase

        Coche miSuv = new Coche();
        miSuv.AgregarPuerta();

        System.out.println(miSuv.puertas + " Puertas ");

        
        // Llamo y paso parámetros a función
        int result;
        result = operacion (10, 20, 30);

       System.out.println(result + " Total de la suma");
    }

    //Defino Función
    public static int operacion(int a, int b, int c) {
        
        return a + b + c;
    }
}

//Defino la clase Coche
class Coche {
    public int puertas = 4;

    public void AgregarPuerta() {
        this.puertas++;
    }
}