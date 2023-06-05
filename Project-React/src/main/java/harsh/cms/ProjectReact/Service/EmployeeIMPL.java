package harsh.cms.ProjectReact.Service;

import harsh.cms.ProjectReact.Model.Employee;
import harsh.cms.ProjectReact.Model.EmployeeDTO;
import harsh.cms.ProjectReact.Model.LoginDTO;
import harsh.cms.ProjectReact.PayLoadResponse.LoginMessage;
import harsh.cms.ProjectReact.Repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeIMPL implements EmployeeService{

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    public String saveEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee(

                 employeeDTO.getEmpId(),
                 employeeDTO.getEmployeeName(),
                 employeeDTO.getEmail(),
                 employeeDTO.getDepartment(),
                this.passwordEncoder.encode(employeeDTO.getPassword())
        );

        employeeRepo.save(employee);
        return employee.getEmployeeName();
    }

    @Override
    public Employee updateEmployee(Employee employee1 , int empId) {
        if (employeeRepo.findById(empId).isPresent()){
            Employee employee = employeeRepo.findById(empId).get();
            employee.setEmpId(employee1.getEmpId());
            employee.setEmail(employee1.getEmail());
            employee.setEmployeeName(employee1.getEmployeeName());
            employee.setDepartment(employee1.getDepartment());
            employee.setPassword(employee1.getPassword());
            return employeeRepo.save(employee);
        }

        else {
            System.out.println("not done");
            return null;
        }

    }

    @Override
    public LoginMessage loginEmployee(LoginDTO loginDTO) {
        System.out.println(loginDTO.getEmail());
        String msg = "";
        Employee employee1 = employeeRepo.findByEmail(loginDTO.getEmail());
        System.out.println(employee1);
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {

                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }



    }
    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepo.findAll();
    }



    @Override
    public Employee getEmployeeById(int empId) {
        return employeeRepo.findByEmpId(empId);
    }

    @Override
    public boolean deleteEmployee(int empid) {
        employeeRepo.deleteById(empid);
        return true;
    }
}
