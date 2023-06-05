package harsh.cms.ProjectReact.Repository;

import harsh.cms.ProjectReact.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {
    Employee findByEmail(String email);
    Employee findByEmpId(int empId);

    Employee findByEmployeeName(String email);
    Optional<Employee> findByEmailAndPassword(String email,String password);

}
