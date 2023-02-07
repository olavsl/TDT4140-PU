# CONTRIBUTING.md
 
Denne filen omhandler våre GitLab conventions for å få en uniform bruk av GitLab. Ved dette blir det enkelt og oversiktlig både for oss og de som skal rette det.

## Issues
Vi lager mindre issues som til sammen skal dekke hele den planlagte milestonen i perioden. Hvert issue har et tilhørende nummer som vi knytter sammen med både branch og commits som tilhører issuet.

## Branch naming 
Navnet på git-branchen skal starte med oppgavens GitLab issue-nummer, f.eks `1-homepage`.

## Commitmelding 
Commitmeldingen starter med `#<oppgavenummeret>` i parentes, etterfulgt av et ord fra listen under, også noen ord som beskriver committen.
 - `feat` for ny funksjonalitet
 - `fix` for bugfix eller fiksing av skrivefeil
 - `style` for fiksing av kodestil
 - `docs` for skriving av dokumentasjon
 - `refactor` for omstrukturering av kode
 - `test` for endringer i tester
 - `build` for ting relatert til byggesystemet
 - `chore` for alt annet
 
F.eks ‘#12feat: adds a getter’
 
## Branch use
Vi ønsker å kunne merge ofte for å unngå større merge konflikter og havne mange commits bak. Dermed kan det eksistere flere brancher med samme nummer.
 
Det skal gjøres ordentlig gjennomgang av all kode før det merges inn i dev branchen. Ingen direkte endringer skal skje på dev branchen eller main. Main vil være proteced hele prosjekt for å unngå endringer dirkete på denne.
 
## Dev branch
Vi ønsker å ha en dev branch som tilhører sprinten. Dette vil fungere som en “main” branch der alle lager sin branch fra denne. Det vil si at vi tilsammen i løpet av prosjektet kommer til å ha 3 ulike dev  brancher totalt.
Dette er for at main alltid skal være fungerende, men underveis i prosjektet vil det være perioder, der man trenger å merge for å kunne flette sammen flere deler uten at det nødvendigvis fungerer hele tiden.
