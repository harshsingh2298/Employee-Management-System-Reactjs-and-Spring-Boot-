package harsh.cms.ProjectReact.Service;

import harsh.cms.ProjectReact.Model.Employee;
import harsh.cms.ProjectReact.Model.EmployeeDTO;
import harsh.cms.ProjectReact.Model.LoginDTO;
import harsh.cms.ProjectReact.PayLoadResponse.LoginMessage;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {

    String saveEmployee(EmployeeDTO employeeDTO);

    Employee updateEmployee(Employee employeeDTO, int empId);
    LoginMessage loginEmployee(LoginDTO loginDTO);
    List<Employee> getAllEmployee();

    Employee getEmployeeById(int empId);

    boolean deleteEmployee( int empid);
}
