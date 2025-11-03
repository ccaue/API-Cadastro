package com.barbearia.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barbearia.model.Cliente;
import com.barbearia.repository.RepositoryClienteDAO;

@RestController
@CrossOrigin
@RequestMapping("apirest")
public class ControllerCliente implements InterfaceCliente {
	
	@Autowired
    private RepositoryClienteDAO repoClienteDAO;

    @PostMapping("/cliente")
    @Override
    public Cliente salvarCliente(Cliente cliente) {
        return repoClienteDAO.save(cliente);
    }

    @PutMapping("/cliente")
    @Override
    public Cliente alterarCliente(Cliente cliente) {
        return repoClienteDAO.save(cliente);
    }

    @DeleteMapping("/cliente/{id}")
    @Override
    public void excluirCliente(long id) {
    	repoClienteDAO.deleteById(id);
    }

    @GetMapping("/cliente/{id}")
    @Override
    public Optional<Cliente> buscarCliente(long id) {
        return repoClienteDAO.findById(id);
    }

    @GetMapping("/cliente")
    @Override
    public List<Cliente> listarTodos() {
        return repoClienteDAO.findAll();
    }
}
