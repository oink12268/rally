package com.eggplant.rally;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Log4j2
@SpringBootApplication
public class RallyApplication {

    public static void main(String[] args) {
        SpringApplication.run(RallyApplication.class, args);
        log.info("*----------------*");
        log.info("|                |");
        log.info("|   SUCCESS !!!  |");
        log.info("|                |");
        log.info("*----------------*");
    }

}
