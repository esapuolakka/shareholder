package com.example.shareholder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.shareholder.model.Person;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {

    @Query(value = """
        SELECT ETUNIMI, SUKUNIMI, OSAKKEIDEN_MAARA 
        FROM (
            SELECT ETUNIMI, SUKUNIMI, OSAKKEIDEN_MAARA, RANK() OVER (ORDER BY OSAKKEIDEN_MAARA DESC) as rank
            FROM HENKILO
        ) ranked_persons
        WHERE rank <= 5
        
        UNION ALL
        
        SELECT 'Muut' AS ETUNIMI, '' AS SUKUNIMI, SUM(OSAKKEIDEN_MAARA) AS OSAKKEIDEN_MAARA
        FROM (
          SELECT ETUNIMI, SUKUNIMI, OSAKKEIDEN_MAARA, RANK() OVER (ORDER BY OSAKKEIDEN_MAARA DESC) as rank
          FROM HENKILO
          ) ranked_persons
          WHERE rank > 5
        """, nativeQuery = true)
    List<Object[]> findTop5ShareholdersAndRest();
}
