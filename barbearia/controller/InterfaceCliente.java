package com.barbearia.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.barbearia.model.Cliente;

public interface InterfaceCliente {

	Cliente salvarCliente(@RequestBody Cliente cliente);
    Cliente alterarCliente(@RequestBody Cliente cliente);
    void excluirCliente(@PathVariable long id);
    Optional<Cliente> buscarCliente(@PathVariable long id);
    List<Cliente> listarTodos();
}
