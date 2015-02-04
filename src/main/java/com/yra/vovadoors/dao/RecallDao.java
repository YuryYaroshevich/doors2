package com.yra.vovadoors.dao;

import java.util.List;

import com.yra.vovadoors.model.Recall;

public interface RecallDao {
	Recall save(Recall recall);
	
	List<Recall> getAll();
}
