package harsh.cms.ProjectReact.Controller;


import harsh.cms.ProjectReact.Model.Employee;
import harsh.cms.ProjectReact.Model.EmployeeDTO;
import harsh.cms.ProjectReact.Model.LoginDTO;
import harsh.cms.ProjectReact.PayLoadResponse.LoginMessage;
import harsh.cms.ProjectReact.Service.EmployeeIMPL;
import harsh.cms.ProjectReact.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashSet;
import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class Controller {
    @Autowired
    private EmployeeService employeeService;




    @PostMapping("/register")
    public ResponseEntity<?> registerEmployee(@RequestBody EmployeeDTO employeeDTO){
        String result = employeeService.saveEmployee(employeeDTO);
        return new ResponseEntity<>("Data Saved", HttpStatus.ACCEPTED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) throws Exception {
        System.out.println(loginDTO);
        LoginMessage loginMessage = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }

    @PutMapping("/{empId}")
    public ResponseEntity<?> updateEmployee( @RequestBody Employee employeeDTO, @PathVariable int empId){

        return new ResponseEntity<>(employeeService.updateEmployee(employeeDTO,empId),HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/delete/{empId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable int empId){
        return new ResponseEntity<>(employeeService.deleteEmployee(empId), HttpStatus.OK);
    }

    @GetMapping("/get/{empId}")
    public ResponseEntity<?> getUser(@PathVariable int empId){
        return new ResponseEntity<>(employeeService.getEmployeeById(empId),HttpStatus.OK);
    }



    @GetMapping("/showAll")
    public List<Employee> loginUser(){
        return employeeService.getAllEmployee();
    }


}
