package harsh.cms.ProjectReact.Model;

import lombok.*;

import javax.persistence.Entity;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class EmployeeDTO {
    private int empId;

    private String employeeName;

    private String email;



    private String department;

    private String password;
}
