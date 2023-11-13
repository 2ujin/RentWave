const { DataTypes } = require("sequelize");
const { rentwavedb } = require("../Server/database.js");

///schema

///PropertyListing Schema

const Propertylisting = rentwavedb.define(
    "propertylisting",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      PropertyName: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'propertylisting',
      timestamps: false, 
    }
  );

  ///PropertyListing Schema

const RentalIncome = rentwavedb.define(
  "RentalIncome",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    StartPeriod: {
      type: DataTypes.TEXT
    },
    EndPeriod: {
      type: DataTypes.TEXT
    },
    Rental: {
      type: DataTypes.BIGINT
    },
    PropertyID: {
      type: DataTypes.BIGINT
    }
  },
  {
    tableName: 'RentalIncome',
    timestamps: false
  }
);
  
const InterestExpense = rentwavedb.define(
  "InterestExpense",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    StartPeriod: {
      type: DataTypes.TEXT
    },
    EndPeriod: {
      type: DataTypes.TEXT
    },
    InterestExpense: {
      type: DataTypes.BIGINT
    },
    PropertyID: {
      type: DataTypes.BIGINT
    }
  },
  {
    tableName: 'InterestExpense',
    timestamps: false
  }
);

const CapitalRepayments = rentwavedb.define(
  "CapitalRepayments",
  { 
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },    
    StartPeriod: {
      type: DataTypes.TEXT
    },
    EndPeriod: {
      type: DataTypes.TEXT
    },
    CapitalRepaid: {
      type: DataTypes.BIGINT
    },
    PropertyID: {
      type: DataTypes.BIGINT,
    }
  },
  {
    tableName: 'CapitalRepayments',
    timestamps: false
  }
);

const DisallowableExpenses = rentwavedb.define(
    "DisallowableExpenses",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      Description: {
        type: DataTypes.TEXT
      },
      Amount: {
        type: DataTypes.BIGINT
      },
      PeriodId: {
        type: DataTypes.TEXT
      },
      PropertyID: {
        type: DataTypes.BIGINT
      },
      DateIncurred: {
        type: DataTypes.TEXT
      },
    },
    {
      tableName: 'DisallowableExpenses',
      timestamps: false
    }
  );

const AllowableExpenses = rentwavedb.define(
      "AllowableExpenses",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
        },
        Description: {
          type: DataTypes.TEXT
        },
        Amount: {
          type: DataTypes.BIGINT
        },
        PeriodId: {
          type: DataTypes.TEXT
        },
        PropertyID: {
          type: DataTypes.BIGINT
        },
        DateIncurred: {
          type: DataTypes.TEXT
        },
      },
      {
        tableName: 'AllowableExpenses',
        timestamps: false
      }
    );



  module.exports = { Propertylisting, AllowableExpenses,CapitalRepayments,DisallowableExpenses,InterestExpense,RentalIncome };