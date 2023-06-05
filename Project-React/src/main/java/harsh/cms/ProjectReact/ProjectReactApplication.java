package harsh.cms.ProjectReact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ProjectReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectReactApplication.class, args);
	}
//(exclude = SecurityAutoConfiguration.class)
}
