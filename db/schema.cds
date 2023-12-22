namespace SampleLiverpool;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Risks : managed
{
    key ID : UUID;
    title : String(100);
    priority : String(5);
    descr : String(100);
    mitigations : Association to many Mitigations on mitigations.risks = $self;
}

entity Mitigations
{
    key ID : UUID;
    risks : Association to one Risks;
}
