package com.yra.vovadoors.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yra.vovadoors.model.Recall;

@Repository
public interface RecallJpaRepository extends JpaRepository<Recall, Long> {

}
