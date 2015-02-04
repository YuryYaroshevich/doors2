package com.yra.vovadoors.service;

import java.util.List;

import com.yra.vovadoors.model.Recall;

public interface RecallService {
	List<Recall> getAll();
	
	Recall save(Recall recall);
}
