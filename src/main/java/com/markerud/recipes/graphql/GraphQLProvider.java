package com.markerud.recipes.graphql;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;

@Component
public class GraphQLProvider {

    @Value("classpath:schema")
    private Resource schemaLocation;

    private GraphQL graphQL;
    private Query query;

    @Bean
    public GraphQL graphQL() {
        return graphQL;
    }

    @Autowired
    public GraphQLProvider(Query query) {
        this.query = query;
    }

    @PostConstruct
    public void init() throws IOException {
        SchemaParser schemaParser = new SchemaParser();
        SchemaGenerator schemaGenerator = new SchemaGenerator();

        TypeDefinitionRegistry typeRegistry = new TypeDefinitionRegistry();

        Arrays.stream(schemaLocation.getFile().listFiles()).forEach(file -> typeRegistry.merge(schemaParser.parse(file)));

        GraphQLSchema graphQLSchema = schemaGenerator.makeExecutableSchema(typeRegistry, buildRuntimeWiring());
        this.graphQL = GraphQL.newGraphQL(graphQLSchema).build();
    }

    private RuntimeWiring buildRuntimeWiring() {
        return RuntimeWiring.newRuntimeWiring() //
                .type("Query", typeWiring -> typeWiring //
                        .dataFetcher("allFoods", query.allFoodsFetcher) //
                        .dataFetcher("allRecipes", query.allRecipesFetcher)) //
                .build();
    }
}
