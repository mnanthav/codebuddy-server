// .up - create tables
exports.up = async knex => {
    
    //-------------------------- languages table schema
    await knex.schema.createTable('languages', tbl => {
        // increment languageID
        tbl.increments('languageID').primary();
        // language name
        tbl.string('name', 30).notNullable();
        // year created
        tbl.integer('yearCreated').unsigned();
        // creator
        tbl.string('creator', 60).notNullable();
        // description
        tbl.text('description');
        // ide used
        tbl.string('ide');
        // ide website
        tbl.string('ideWebsite', 2048);
        // recommended extensions
        tbl.text('recExtensions');
        // common uses
        tbl.text('commonlyUsed');
    });

    //-------------------------- syntax_constructs table schema
    await knex.schema.createTable('synax_constructs', tbl => {
        // increment id
        tbl.increments('id').primary();
        // languageID foreign key
        tbl.integer('languageID').unsigned().notNullable().references('languageID').inTable('languages').onDelete('CASCADE');
        // element
        tbl.string('element').notNullable();
        // name
        tbl.string('name', 60);
        // syntax 
        tbl.string('syntax');
        // example
        tbl.text('example');
        // sources
        tbl.string('sources', 2048);
    });

    //-------------------------- libraries_frameworks table schema
    await knex.schema.createTable('libraries_frameworks', tbl => {
        // increment id
        tbl.increments('id').primary();
        // languageID foreign key
        tbl.integer('languageID').unsigned().notNullable().references('languageID').inTable('languages').onDelete('CASCADE');
        // library/framework name
        tbl.string('name', 60).notNullable();
        // type - either library/framework
        tbl.string('type', 11).notNullable();
        // description 
        tbl.text('description');
        // website
        tbl.string('website', 2048);
    });
}

// .down - drop tables
exports.down = async knex => {
    
    await knex.schema.dropTableIfExists('libraries_frameworks');
    await knex.schema.dropTableIfExists('syntax_constructs');
    await knex.schema.dropTableIfExists('languages');
};
