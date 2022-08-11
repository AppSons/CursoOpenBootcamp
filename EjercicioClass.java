public class EjercicioClass {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.edad = 35;
        cliente.name = "Arturo";
        cliente.telefono = 123456789;
        cliente.credito = "Aprobado";

        System.out.println("Nombre Cliente: " + cliente.name);
        System.out.println("Edad: " + cliente.edad);
        System.out.println("Teléfono: " + cliente.telefono);
        System.out.println("Estado Crédito: " + cliente.credito);

        Trabajador trabajador = new Trabajador();
        trabajador.name = "Gomez Alberto";
        trabajador.edad = 45;
        trabajador.telefono = 636452314;
        trabajador.salario = 1000;

        System.out.println("Nombre Trabajador: " + trabajador.name);
        System.out.println("Edad: " + trabajador.edad);
        System.out.println("Teléfono: " + trabajador.telefono);
        System.out.println("Salario: " + trabajador.salario);
    }
}
class Persona  {
    int edad;
    String name;
    int telefono;
} 
class Cliente extends Persona {
    String credito;
}
class Trabajador extends Persona {
    int salario;
}