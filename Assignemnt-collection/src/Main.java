import java.util.*;

 class Employee {
    private Employee manager;
    private String costCentre;
    private String name;
     String id;
    private String projectName;

    public Employee(Employee manager, String costCentre, String name, String id, String projectName) {
        this.manager = manager;
        this.costCentre = costCentre;
        this.name = name;
        this.id = id;
        this.projectName = projectName;
    }

    // getters and setters

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

public class Main {
    public static void main(String[] args) {
        Set<Employee> employeesSet = new HashSet<>();
        Map<Employee, List<Employee>> employeeMap = new HashMap<>();
    //Adding Unique Employees
        Employee emp1 = new Employee(null, "CC1", "Sanskar", "123", "Aspire");
        employeesSet.add(emp1);
        employeeMap.put(emp1, new ArrayList<>());

        Employee emp2 = new Employee(emp1, "CC1", "Rabindra", "456", "Aspire2");
        employeesSet.add(emp2);
        employeeMap.put(emp2, new ArrayList<>());
    // Adding Duplicate Employee
        Employee emp3 = new Employee(null, "CC2", "Yuvraj", "123", "Aspire3");
        if (!employeesSet.contains(emp3)) {
            employeesSet.add(emp3);
            employeeMap.put(emp3, new ArrayList<>());
        } else {
            System.out.println("Duplicate employee not added. Empid: " + emp3.id);
        }
    }
}
